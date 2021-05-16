import { all, call, put, fork, takeLatest } from "redux-saga/effects";

import actions, {
  CREATE_CATEGORY,
  FETCH_CATEGORY,
  UPDATE_CATEGORY,
} from "../actions/category";
import rf from "../../requests/RequestFactory";

function* fetchCategories(action) {
  try {
    const { data } = yield call(
      () => rf.getRequest("CategoryRequest").fetchCategories(),
      {}
    );
    yield put(actions.onFetchCategorySucceed(data));
  } catch (err) {
    yield put(actions.onFetchCategoryFailed(err));
  }
}

function* createCategory(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("CategoryRequest").createCategory(data),
      action.data
    );
    if (error.code === 200) {
      yield call(action.callback());
      yield put(actions.onCreateCategory());
    } else {
      yield put(actions.onCreateCategoryFailed(error.message));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onCreateCategoryFailed(err));
  }
}

function* updateCategory(action) {
  try {
    const { data, error } = yield call(
      (data) => rf.getRequest("CategoryRequest").updateCategory(data),
      action.data
    );
    if (error.code === 200) {
      action.callback();
      yield put(actions.onUpdateCategorySucceed({}));
    } else {
      yield put(actions.onUpdateCategoryFailed(error.message));
    }
  } catch (err) {
    console.log("=======", err);
    yield put(actions.onUpdateCategoryFailed(err));
  }
}

function* watchCategory() {
  yield takeLatest(FETCH_CATEGORY, fetchCategories);
  yield takeLatest(UPDATE_CATEGORY, updateCategory);
  yield takeLatest(CREATE_CATEGORY, createCategory);
}

export default function* rootSaga() {
  yield all([fork(watchCategory)]);
}
