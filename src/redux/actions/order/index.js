export const FETCH_ORDERS = 'FETCH_ORDERS'
export const FETCH_ORDERS_SUCCEED = 'FETCH_ORDERS_SUCCEED'
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED'
export const UPDATE_ORDER_SUCCEED = 'UPDATE_ORDER_SUCCEED'
export const UPDATE_ORDER_FAILED = 'UPDATE_ORDER_FAILED'
export const UPDATE_ORDER = 'UPDATE_ORDER'

export default {
  onFetchOrders: () => ({
    type: FETCH_ORDERS,
  }),
  onFetchOrdersSucceed: (data) => ({
    type: FETCH_ORDERS_SUCCEED,
    data,
  }),
  onFetchOrdersFailed: (err) => ({
    type: FETCH_ORDERS_FAILED,
    err,
  }),
  onUpdateOrderSucceed: (data) => ({
    type: UPDATE_ORDER_SUCCEED,
    data,
  }),
  onUpdateOrderFailed: (err) => ({
    type: UPDATE_ORDER_FAILED,
    err,
  }),
  onUpdateOrder: (params) => ({
    type: UPDATE_ORDER,
    params,
  }),
};