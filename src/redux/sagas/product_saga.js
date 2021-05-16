import {
    all, call, put,fork ,takeLatest,
} from 'redux-saga/effects';

import actions,{ FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, SEARCH_PRODUCT } from '../actions/product';
import rf from '../../requests/RequestFactory';

function* fetchProducts(action) {
    try {
        const {data, total_count, error} = yield call(
            (data) => rf.getRequest('ProductRequest').fetchProducts(data), action.params
        );
        // if (resp.code === 200) {
            yield put(actions.onFetchProductsSucceed({data, total_count}));
        // }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchProductsFailed(err));
    }
}

function* createProduct(action) {
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('ProductRequest').createProduct(data), action.data
        );
        if (error.code === 200) {
            yield call(action.callback());
            yield put(actions.createProduct());
        }
        else {
            yield put(actions.onCreateProductFailed(error.message));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onCreateProductFailed(err));
    }
}

function* updateProduct(action) {
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('ProductRequest').updateProduct(data), action.data
        );
        if (error.code === 200) {
            action.callback();
            yield put(actions.onUpdateProductSucceed({}));
        }
        else {
            yield put(actions.onUpdateProductFailed(error.message));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onUpdateProductFailed(err));
    }
}

function* searchProduct(action){
    try{
        const { data, error } = yield call(
            (data) => rf.getRequest('ProductRequest').searchProduct(data), action.data
        );
        if (error.code === 200) {
            yield put(actions.onSearchProductSuccess(data));
        }
        else {
            yield put(actions.onSearchProductFailed(error.message));
        }
    } catch (err){
        yield put(actions.onSearchProductFailed(err));
    }
}


function* watchProduct() {
    yield takeLatest(FETCH_PRODUCTS, fetchProducts);
    yield takeLatest(CREATE_PRODUCT, createProduct);
    yield takeLatest(UPDATE_PRODUCT, updateProduct);
    yield takeLatest(SEARCH_PRODUCT, searchProduct);
}

export default function* rootSaga() {
    yield all([fork(watchProduct)]);
}