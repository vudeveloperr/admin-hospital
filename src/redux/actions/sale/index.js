export const FETCH_SALES = 'FETCH_SALES'
export const FETCH_SALES_SUCCEED = 'FETCH_SALES_SUCCEED'
export const FETCH_SALES_FAILED = 'FETCH_SALES_FAILED'

export const CREATE_SALE = 'CREATE_SALE'
export const CREATE_SALE_SUCCEED = 'CREATE_SALE_SUCCEED'
export const CREATE_SALE_FAILED = 'CREATE_SALE_FAILED'

export const UPDATE_SALE = 'UPDATE_SALE'
export const UPDATE_SALE_SUCCEED = 'UPDATE_SALE_SUCCEED'
export const UPDATE_SALE_FAILED = 'UPDATE_SALE_FAILED'

export default {
  onFetchSales: (params, callback) =>  ({
    type: FETCH_SALES,
    params, 
    callback
  }),
  onFetchSalesSucceed: (data) => ({
    type: FETCH_SALES_SUCCEED,
    data,
  }),
  onFetchSalesFailed: (err) => ({
    type: FETCH_SALES_FAILED,
    err,
  }),
  onUpdateSale: (params) => ({
    type: UPDATE_SALE,
    params,
  }),
  onUpdateSaleSucceed: (data) => ({
    type: UPDATE_SALE_SUCCEED,
    data
  }),
  onUpdateSaleFailed: (err) => ({
    type: UPDATE_SALE_FAILED,
    err
  }),
  onCreateSale: (data) => ({
    type:CREATE_SALE,
    data
  }),
  onCreateSaleSuccess: (data) =>({
      type: CREATE_SALE_SUCCEED,
      data
  }),
  onCreateSaleFailed: (err) => ({
      type: CREATE_SALE_FAILED,
      err
  })
};
