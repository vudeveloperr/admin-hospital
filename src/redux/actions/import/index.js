
export const CREATE_IMPORT = 'CREATE_IMPORT'
export const CREATE_IMPORT_SUCCEED = 'CREATE_IMPORT_SUCCEED'
export const CREATE_IMPORT_FAILED = 'CREATE_IMPORT_FAILED'

export const FETCH_LIST_IMPORT = 'FETCH_LIST_IMPORT'
export const FETCH_LIST_IMPORT_SUCCEED = 'FETCH_LIST_IMPORT_SUCCEED'
export const FETCH_LIST_IMPORT_FAILED = 'FETCH_LIST_IMPORT_FAILED'

export default {
    
    onCreateImport: (data,callback) => ({
        type: CREATE_IMPORT,
        data,
        callback
    }),
    onCreateImportSuccess: (data) => ({
        type: CREATE_IMPORT_SUCCEED,
        data
    }),
    onCreateImportFailed: (err) => ({
        type: CREATE_IMPORT_FAILED,
        err
    }),
    onFetchImport: (data) => ({
        type: FETCH_LIST_IMPORT,
        data
    }),
    onFetchImportSucceed: (data) => ({
        type: FETCH_LIST_IMPORT_SUCCEED,
        data
    }),
    onFetchImportFailed: (err) => ({
        type: FETCH_LIST_IMPORT_FAILED,
        err
    })
}




