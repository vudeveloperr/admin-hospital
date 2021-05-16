import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import actions, { FETCH_ADMIN, UPDATE_ADMIN } from "../actions/admin";
import rf from "../../requests/RequestFactory";

function* fetchAdmin(action) {
  try {
    const { data } = yield call(
      (data) => rf.getRequest("AdminRequest").fetchAdmin(data),
      action.data
    );
    yield put(actions.fetchAdminSucceed({ data }));
  } catch (err) {
    yield put(actions.fetchAdminFailed(err));
  }
}

function* updateAdmin(action) {
  
  try {
    const { data, error } = yield call(
        (data) => rf.getRequest('AdminRequest').updateAdmin(data), action.data
    );
    if (error.code === 200) {
        action.callback();
        yield put(actions.updateAdminSucceed({}));
    }
    else {
        yield put(actions.updateAdminFailed(error.message));
    }
  } catch (err) {
      console.log("=======", err)
      yield put(actions.updateAdminFailed(err));
  }
}

function* watchAdmin() {
  yield takeLatest(FETCH_ADMIN, fetchAdmin);
  yield takeLatest(UPDATE_ADMIN, updateAdmin);
}

export default function* rootSaga() {
  yield all([fork(watchAdmin)]);
}
