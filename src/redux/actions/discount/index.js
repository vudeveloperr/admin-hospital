export const FETCH_DISCOUNT = 'FETCH_DISCOUNT'
export const FETCH_DISCOUNT_SUCCEED = 'FETCH_DISCOUNT_SUCCEED'
export const FETCH_DISCOUNT_FAILED = 'FETCH_DISCOUNT_FAILED'

export const CREATE_DISCOUNT = 'CREATE_DISCOUNT'
export const CREATE_DISCOUNT_SUCCEED = 'CREATE_DISCOUNT_SUCCEED'
export const CREATE_DISCOUNT_FAILED = 'CREATE_DISCOUNT_FAILED'

export const UPDATE_DISCOUNT = 'UPDATE_DISCOUNT'
export const UPDATE_DISCOUNT_SUCCEED = 'UPDATE_DISCOUNT_SUCCEED'
export const UPDATE_DISCOUNT_FAILED = 'UPDATE_DISCOUNT_FAILED'

export default {
  onFetchDiscount: (params, callback) =>  ({
    type: FETCH_DISCOUNT,
    params, 
    callback
  }),
  onFetchDiscountSucceed: (data) => ({
    type: FETCH_DISCOUNT_SUCCEED,
    data,
  }),
  onFetchDiscountFailed: (err) => ({
    type: FETCH_DISCOUNT_FAILED,
    err,
  }),
  onUpdateDiscount: (data, callback) => ({
    type: UPDATE_DISCOUNT,
    data,
    callback
  }),
  onUpdateDiscountSucceed: (data) => ({
    type: UPDATE_DISCOUNT_SUCCEED,
    data
  }),
  onUpdateDiscountFailed: (err) => ({
    type: UPDATE_DISCOUNT_FAILED,
    err
  }),
  onCreateDiscount: (data,callback) => ({
    type:CREATE_DISCOUNT,
    data,
    callback
  }),
  onCreateDiscountSuccess: (data) =>({
      type: CREATE_DISCOUNT_SUCCEED,
      data
  }),
  onCreateDiscountFailed: (err) => ({
      type: CREATE_DISCOUNT_FAILED,
      err
  })
};
