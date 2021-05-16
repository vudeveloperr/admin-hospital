export const LOGIN = 'LOGIN'
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export default {
    login: (data,callback) => ({
        type: LOGIN,
        data,
        callback,
    }),
    loginSucceed: (data) => ({
        type: LOGIN_SUCCEED,
        data,
    }),
    loginFailed: (err) => ({
        type: LOGIN_FAILED,
        err,
    }),
}