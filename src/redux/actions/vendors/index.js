export const FETCH_VENDORS = 'FETCH_VENDORS'
export const FETCH_VENDORS_SUCCEED = 'FETCH_VENDORS_SUCCEED'
export const FETCH_VENDORS_FAILED = 'FETCH_VENDORS_FAILED'

export const CREATE_VENDOR = 'CREATE_VENDOR'
export const CREATE_VENDOR_SUCCEED = 'CREATE_VENDOR_SUCCEED'
export const CREATE_VENDOR_FAILED = 'CREATE_VENDOR_FAILED'

export const UPDATE_VENDOR = 'UPDATE_VENDOR'
export const UPDATE_VENDOR_SUCCEED = 'UPDATE_VENDOR_SUCCEED'
export const UPDATE_VENDOR_FAILED = 'UPDATE_VENDOR_FAILED'

export default {
  onFetchVendors: (params, callback) =>  ({
    type: FETCH_VENDORS,
    params, 
    callback
  }),
  onFetchVendorsSucceed: (data) => ({
    type: FETCH_VENDORS_SUCCEED,
    data,
  }),
  onFetchVendorsFailed: (err) => ({
    type: FETCH_VENDORS_FAILED,
    err,
  }),
  onUpdateVendor: (data, callback) => ({
    type: UPDATE_VENDOR,
    data,
    callback
  }),
  onUpdateVendorSucceed: (data) => ({
    type: UPDATE_VENDOR_SUCCEED,
    data
  }),
  onUpdateVendorFailed: (err) => ({
    type: UPDATE_VENDOR_FAILED,
    err
  }),
  onCreateVendor: (data,callback) => ({
    type:CREATE_VENDOR,
    data,
    callback
  }),
  onCreateVendorSuccess: (data) =>({
      type: CREATE_VENDOR_SUCCEED,
      data
  }),
  onCreateVendorFailed: (err) => ({
      type: CREATE_VENDOR_FAILED,
      err
  })
};
