import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import {
  FETCH_VENDORS,
  CREATE_VENDOR,
  UPDATE_VENDOR,
} from "../actions/vendors";
import actions from "../actions/vendors";
import rf from "../../requests/RequestFactory";

function* fetchListVendors(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("VendorsRequest").fetchVendors(),
      action.params
    );
    // if (resp.code === 200) {
    yield put(actions.onFetchVendorsSucceed({ data }));
    // }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchVendorsFailed(err));
  }
}

function* createVendor(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("VendorsRequest").createVendor(data),
      action.data
    );
    if (error.code === 200) {
      yield call(action.callback());
      yield put(actions.createVendor());
    } else {
      yield put(actions.onCreateVendorFailed(error.message));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onCreateVendorFailed(err));
  }
}

function* updateVendor(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("VendorsRequest").updateVendor(data),
      action.data
    );
    if (error.code === 200) {
      action.callback();
      yield put(actions.onUpdateVendorSucceed({}));
    } else {
      yield put(actions.onUpdateVendorFailed(error.message));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onUpdateVendorFailed(err));
  }
}

function* watchVendors() {
  yield takeLatest(FETCH_VENDORS, fetchListVendors);
  yield takeLatest(CREATE_VENDOR, createVendor);
  yield takeLatest(UPDATE_VENDOR, updateVendor);
}

export default function* rootSaga() {
  yield all([fork(watchVendors)]);
}
