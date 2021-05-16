import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import {
  FETCH_DISCOUNT,
  CREATE_DISCOUNT,
  UPDATE_DISCOUNT,
} from "../actions/discount";
import actions from "../actions/discount";
import rf from "../../requests/RequestFactory";

function* fetchListDiscount(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("DiscountRequest").fetchDiscount(),
      action.params
    );
    // if (resp.code === 200) {
    yield put(actions.onFetchDiscountSucceed({ data }));
    // }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchDiscountFailed(err));
  }
}

function* createDiscount(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("DiscountRequest").createDiscount(data),
      action.data
    );
    if (error.code === 200) {
      yield call(action.callback());
      yield put(actions.createDiscount());
    } else {
      yield put(actions.onCreateDiscountFailed(error.message));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onCreateDiscountFailed(err));
  }
}

function* updateDiscount(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("DiscountRequest").updateDiscount(data),
      action.data
    );
    if (error.code === 200) {
      action.callback();
      yield put(actions.onUpdateDiscountSucceed({}));
    } else {
      yield put(actions.onUpdateDiscountFailed(error.message));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onUpdateDiscountFailed(err));
  }
}

function* watchDiscount() {
  yield takeLatest(FETCH_DISCOUNT, fetchListDiscount);
  yield takeLatest(CREATE_DISCOUNT, createDiscount);
  yield takeLatest(UPDATE_DISCOUNT, updateDiscount);
}

export default function* rootSaga() {
  yield all([fork(watchDiscount)]);
}
