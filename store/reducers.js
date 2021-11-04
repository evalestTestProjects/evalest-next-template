import { combineReducers } from 'redux';
import { UPDATE_AMOUNT } from './actions';

const rootReducers = (appsState = {}, action) => {
  return combineReducers({
    amount: (state = 0, action) => {
      switch (action.type) {
        case UPDATE_AMOUNT: {
          return action.data;
        }
        default:
          return state;
      }
    },
  })(appsState, action);
};

export default rootReducers;