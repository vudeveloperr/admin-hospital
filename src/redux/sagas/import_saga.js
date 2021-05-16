import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import { FETCH_LIST_IMPORT, CREATE_IMPORT } from "../actions/import";
import actions from "../actions/import";
import rf from "../../requests/RequestFactory";

function* fetchListImport(action) {
    try {
        const {data, error} = yield call(
            (data) => rf.getRequest('ImportRequest').fetchImport(), action.params
        );
         if (error.code === 200) {
            yield put(actions.onFetchImportSucceed({data}));
         }
         else {
            window.custom_history.push("/login");
         }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchImportFailed(err));
    }
}

function* createImport(action) {
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('ImportRequest').createImport(data), action.data
        );
        if (error.code === 200) {
            yield call(action.callback());
        }
        else {
            window.custom_history.push("/login");
            yield put(actions.onCreateImportFailed(error.message));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onCreateImportFailed(err));
    }
}

function* watchImport() {
  yield takeLatest(FETCH_LIST_IMPORT, fetchListImport);
  yield takeLatest(CREATE_IMPORT, createImport);
}

export default function* rootSaga() {
  yield all([fork(watchImport)]);
}
