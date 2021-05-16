import {
  CREATE_SALE_SUCCEED,
  FETCH_SALES_SUCCEED,
  UPDATE_SALE_SUCCEED,
} from "../actions/sale";

export default (
  state = {
    sale: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_SALES_SUCCEED: {
      return {
        ...state,
        sale: action.data.data,
      };
    }
    case CREATE_SALE_SUCCEED: {
      return {
        ...state,
        sale: action.data.data,
      };
    }
    case UPDATE_SALE_SUCCEED: {
      return {
        ...state,
        sale: action.data.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
