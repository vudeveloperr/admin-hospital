export const FETCH_ADMIN = 'FETCH_ADMIN'
export const FETCH_ADMIN_SUCCEED = 'FETCH_ADMIN_SUCCEED'
export const FETCH_ADMIN_FAILED = 'FETCH_ADMIN_FAILED'

export const UPDATE_ADMIN = 'UPDATE_ADMIN'
export const UPDATE_ADMIN_SUCCEED = 'UPDATE_ADMIN_SUCCEED'
export const UPDATE_ADMIN_FAILED = 'UPDATE_ADMIN_FAILED'

export default {
    fetchAdmin: () => ({
        type: FETCH_ADMIN
    }),
    fetchAdminSucceed: (data) => ({
        type: FETCH_ADMIN_SUCCEED,
        data,
    }),
    fetchAdminFailed: (err) => ({
        type: FETCH_ADMIN_FAILED,
        err,
    }),
    updateAdmin: () => ({
        type: UPDATE_ADMIN
    }),
    updateAdminSucceed: (data) => ({
        type: UPDATE_ADMIN_SUCCEED,
        data,
    }),
    updateAdminFailed: (err) => ({
        type: UPDATE_ADMIN_FAILED,
        err,
    }),

}