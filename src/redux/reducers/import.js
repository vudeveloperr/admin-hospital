import {
  CREATE_IMPORT_SUCCEED,
  FETCH_LIST_IMPORT_SUCCEED,
} from "../actions/import";

export default (
  state = {
    product: [],
  },
  action
) => {
  switch (action.type) {
    case CREATE_IMPORT_SUCCEED: {
      return {
        ...state,
        product: action.data.data,
      };
    }
    case FETCH_LIST_IMPORT_SUCCEED: {
      return {
        ...state,
        product: action.data.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
