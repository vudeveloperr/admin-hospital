import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import { FETCH_ORDERS, UPDATE_ORDER } from "../actions/order";
import actions from "../actions/order";
import rf from "../../requests/RequestFactory";

function* fetchOrders(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("OrderRequest").fetchOrders(data),
      action.data
    );
    if (error.code === 200) {
      yield put(actions.onFetchOrdersSucceed({ data }));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchOrdersFailed(err));
  }
}

function* acceptOrder(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("OrderRequest").acceptOrder(data),
      action.params
    );
    if (error.code === 200) {
      yield put(actions.onFetchOrders());
      yield put(actions.onUpdateOrderSucceed({ data }));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onUpdateOrderFailed(err));
  }
}

function* watchOrder() {
  yield takeLatest(FETCH_ORDERS, fetchOrders);
  yield takeLatest(UPDATE_ORDER, acceptOrder);
}

export default function* rootSaga() {
  yield all([fork(watchOrder)]);
}
