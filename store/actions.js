export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
export const UPDATE_AMOUNT_ASYNC = 'UPDATE_AMOUNT_ASYNC';
export const CREATE_ERROR = 'CREATE_ERROR';
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';

export function updateAmount(data) {
    return { type: UPDATE_AMOUNT, data };
}

export function updateAmountAsync(data) {
    return { type: UPDATE_AMOUNT_ASYNC, data };
}

export function createError(category, text) {
    return { type: CREATE_ERROR, category, text };
}

export function createNotification(category, text) {
    return { type: CREATE_NOTIFICATION, category, text };
}