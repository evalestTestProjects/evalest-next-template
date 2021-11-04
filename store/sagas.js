import { put, select, takeEvery, delay } from 'redux-saga/effects';
import { error, warning, success, info } from 'react-toastify-redux';
import { UPDATE_AMOUNT_ASYNC, updateAmount, CREATE_ERROR, CREATE_NOTIFICATION } from './actions';

const getAmount = state => state.common.amount;

function* updateAmountAsync(action) {
    const amount = yield select(getAmount);
    yield delay(2000);
    yield put(updateAmount(action.data));
  }

function* createError(action) {
    switch (action.category) {
        case 'error':
            yield put(error(action.text));
            break;
        case 'warning':
            yield put(warning(action.text));
    }
  }

function* createNotification(action) {
    switch (action.category) {
        case 'info':
            yield put(info(action.text));
            break;
        case 'success':
            yield put(success(action.text));
    }
  }

function* rootSagas() {
    yield takeEvery(UPDATE_AMOUNT_ASYNC, updateAmountAsync);
    yield takeEvery(CREATE_ERROR, createError);
    yield takeEvery(CREATE_NOTIFICATION, createNotification);
}

export default rootSagas;