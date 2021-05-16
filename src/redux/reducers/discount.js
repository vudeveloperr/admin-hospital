import {
  FETCH_DISCOUNT_SUCCEED,
  CREATE_DISCOUNT_SUCCEED,
  UPDATE_DISCOUNT_SUCCEED,
} from "../actions/discount";

export default (
  state = {
    discount: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_DISCOUNT_SUCCEED: {
      return {
        ...state,
        discount: action.data.data,
      };
    }
    case CREATE_DISCOUNT_SUCCEED: {
      return {
        ...state,
        discount: action.data.data,
      };
    }
    case UPDATE_DISCOUNT_SUCCEED: {
      return {
        ...state,
        discount: action.data.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
