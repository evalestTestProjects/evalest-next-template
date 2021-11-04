import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { toastsReducer as toasts } from 'react-toastify-redux';
import rootReducers from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

function createSagaInjector(runSaga, rootSaga) {
  const injectedSagas = new Map();
  const isInjected = key => injectedSagas.has(key);
  const injectSaga = (key, saga) => {
      if (isInjected(key)) return;
      const task = runSaga(saga);
      injectedSagas.set(key, task);
  };
  injectSaga('root', rootSaga);

  return injectSaga;
}

export const createReducer = asyncReducers => (state = {}, action = {}) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState
  } else {
    return combineReducers({
      toasts,
      common: rootReducers,
      ...asyncReducers,
    })(state, action);
  }
};

const persistConfig = {
  key: 'root',
  storage,
}


const initializeStore = () => {
  const persistedReducer = persistReducer(persistConfig, createReducer())
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  const persistor = persistStore(store);
  store.asyncReducers = {};

  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSagas);

  return { store, persistor };
};
export const { store, persistor } = initializeStore()
const makeStore = context => store;
export const wrapper = createWrapper(makeStore);