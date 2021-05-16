import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import {
  FETCH_TOTAL_ACC,
  FETCH_TOTAL_ORDER,
  FETCH_TOTAL_REVENU,
  FETCH_TOP_SALE,
  FETCH_EXPORT_ORDER,
  FETCH_IMPORT,

} from "../actions/statistic";
import actions from "../actions/statistic";
import rf from "../../requests/RequestFactory";

function* fetchTotalAcc(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("StatisticRequest").fetchTotalAcc(),
      action.params
    );
    // if (resp.code === 200) {
    yield put(actions.onFetchTotalAccSucceed({ data }));
    // }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchTotalAccFailed(err));
  }
}

function* fetchTotalOrder(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("StatisticRequest").fetchTotalOrder(),
      action.params
    );
    // if (resp.code === 200) {
    yield put(actions.onFetchTotalOrderSucceed({ data }));
    // }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchTotalOrderFailed(err));
  }
}

function* fetchTotalRevenu(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("StatisticRequest").fetchTotalRevenu(),
      action.params
    );
    // if (resp.code === 200) {
    yield put(actions.onFetchTotalRevenuSucceed({ data }));
    // }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchTotalRevenuFailed(err));
  }
}

function* fetchTopSale(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("StatisticRequest").fetchTopSale(),
      action.params
    );
    // if (resp.code === 200) {
    yield put(actions.onFetchTopSaleSucceed({ data }));
    // }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchTopSaleFailed(err));
  }
}

function* fetchExportOrder(action) {
  try {
    console.log(action.params)
    yield call(
      (data) => rf.getRequest("StatisticRequest").fetchExportOrder(data),
      action.params
    );

    // }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchExportOrderFailed(err));
  }
}

function* fetchImport(action) {
  try {
    console.log(action.params)
    yield call(
      (data) => rf.getRequest("StatisticRequest").fetchImport(data),
      action.params
    );

    // }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchImportFailed(err));
  }
}

function* watchVendors() {
  yield takeLatest(FETCH_TOTAL_ACC, fetchTotalAcc);
  yield takeLatest(FETCH_TOTAL_ORDER, fetchTotalOrder);
  yield takeLatest(FETCH_TOTAL_REVENU, fetchTotalRevenu);
  yield takeLatest(FETCH_TOP_SALE, fetchTopSale);
  yield takeLatest(FETCH_EXPORT_ORDER, fetchExportOrder);
  yield takeLatest(FETCH_IMPORT, fetchImport);
}

export default function* rootSaga() {
  yield all([fork(watchVendors)]);
}
