export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCEED = 'FETCH_PRODUCTS_SUCCEED'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const CREATE_PRODUCT_SUCCEED = 'CREATE_PRODUCT_SUCCEED'
export const CREATE_PRODUCT_FAILED = 'CREATE_PRODUCT_FAILED'

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const UPDATE_PRODUCT_SUCCEED = 'UPDATE_PRODUCT_SUCCEED'
export const UPDATE_PRODUCT_FAILED = 'UPDATE_PRODUCT_FAILED'

export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const SEARCH_PRODUCT_SUCCEED = 'SEARCH_PRODUCT_SUCCEED'
export const SEARCH_PRODUCT_FAILED = 'SEARCH_PRODUCT_FAILED'

export default {
  onFetchProducts: (params, callback) =>  ({
    type: FETCH_PRODUCTS,
    params, 
    callback
  }),
  onFetchProductsSucceed: (data) => ({
    type: FETCH_PRODUCTS_SUCCEED,
    data,
  }),
  onFetchProductsFailed: (err) => ({
    type: FETCH_PRODUCTS_FAILED,
    err,
  }),
  onUpdateProduct: (data, callback) => ({
    type: UPDATE_PRODUCT,
    data,
    callback
  }),
  onUpdateProductSucceed: (data) => ({
    type: UPDATE_PRODUCT_SUCCEED,
    data
  }),
  onUpdateProductFailed: (err) => ({
    type: UPDATE_PRODUCT_FAILED,
    err
  }),
  onCreateProduct: (data,callback) => ({
    type:CREATE_PRODUCT,
    data,
    callback
  }),
  onCreateProductSuccess: (data) =>({
      type: CREATE_PRODUCT_SUCCEED,
      data
  }),
  onCreateProductFailed: (err) => ({
      type: CREATE_PRODUCT_FAILED,
      err
  }),
  onSearchProduct: (data) => ({
    type:SEARCH_PRODUCT,
    data,
  }),
  onSearchProductSuccess: (data) =>({
      type:SEARCH_PRODUCT_SUCCEED,
      data
  }),
  onSearchProductFailed: (err) => ({
      type:SEARCH_PRODUCT_FAILED,
      err
  })
};
