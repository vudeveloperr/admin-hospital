export const FETCH_CATEGORY = 'FETCH_CATEGORY'
export const FETCH_CATEGORY_SUCCEED = 'FETCH_CATEGORY_SUCCEED'
export const FETCH_CATEGORY_FAILED = 'FETCH_CATEGORY_FAILED'

export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const CREATE_CATEGORY_SUCCEED = 'CREATE_CATEGORY_SUCCEED'
export const CREATE_CATEGORY_FAILED = 'CREATE_CATEGORY_FAILED'

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_CATEGORY_SUCCEED = 'UPDATE_CATEGORY_SUCCEED'
export const UPDATE_CATEGORY_FAILED = 'UPDATE_CATEGORY_FAILED'


export default {
  onFetchCategory: () => ({
    type: FETCH_CATEGORY,
  }),
  onFetchCategorySucceed: (data) => ({
    type: FETCH_CATEGORY_SUCCEED,
    data,
  }),
  onFetchCategoryFailed: (err) => ({
    type: FETCH_CATEGORY_FAILED,
    err,
  }),
  onUpdateCategory: (data, callback) => ({
    type: UPDATE_CATEGORY,
    data,
    callback
  }),
  onUpdateCategorySucceed: (data) => ({
    type: UPDATE_CATEGORY_SUCCEED,
    data
  }),
  onUpdateCategoryFailed: (err) => ({
    type: UPDATE_CATEGORY_FAILED,
    err
  }),
  onCreateCategory: (data,callback) => ({
    type:CREATE_CATEGORY,
    data,
    callback
  }),
  onCreateCategorySuccess: (data) =>({
      type: CREATE_CATEGORY_SUCCEED,
      data
  }),
  onCreateCategoryFailed: (err) => ({
      type: CREATE_CATEGORY_FAILED,
      err
  })
};