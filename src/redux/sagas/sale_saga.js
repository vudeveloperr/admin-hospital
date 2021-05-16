import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import { FETCH_SALES, CREATE_SALE, UPDATE_SALE } from "../actions/sale";
import actions from "../actions/sale";
import rf from "../../requests/RequestFactory";

function* fetchListSales(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("SaleRequest").fetchSales(),
      action.params
    );
     if (error.code === 200) {
    yield put(actions.onFetchSalesSucceed({ data }));
     }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onFetchSalesFailed(err));
  }
}

function* createSale(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("SaleRequest").createSale(data),
      action.data
    );
    if (error.code === 200) {
      yield put(actions.onFetchSales());
    } 
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onCreateSaleFailed(err));
  }
}

function* updateSales(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("SaleRequest").updateSale(data),
      action.params
    );
    if (error.code === 200) {
      yield put(actions.onFetchSales());
    } else {
      yield put(actions.onUpdateSaleFailed(error.message));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onUpdateSaleFailed(err));
  }
}

function* watchSale() {
  yield takeLatest(FETCH_SALES, fetchListSales);
  yield takeLatest(CREATE_SALE, createSale);
  yield takeLatest(UPDATE_SALE, updateSales);
}

export default function* rootSaga() {
  yield all([fork(watchSale)]);
}
