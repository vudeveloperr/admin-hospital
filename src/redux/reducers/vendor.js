import {
  CREATE_VENDOR_SUCCEED,
  FETCH_VENDORS_SUCCEED,
  UPDATE_VENDOR_SUCCEED,
} from "../actions/vendors";

export default (
  state = {
    vendors: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_VENDORS_SUCCEED: {
      return {
        ...state,
        vendors: action.data.data,
      };
    }
    case CREATE_VENDOR_SUCCEED: {
      return {
        ...state,
        vendors: action.data.data,
      };
    }
    case UPDATE_VENDOR_SUCCEED: {
      return {
        ...state,
        vendors: action.data.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
