import {
  CREATE_PRODUCT_SUCCEED,
  FETCH_PRODUCTS_SUCCEED,
  UPDATE_PRODUCT_SUCCEED,
  SEARCH_PRODUCT_SUCCEED,
  SEARCH_PRODUCT,
} from "../actions/product";

export default (
  state = {
    product: [],
    search: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCEED: {
      return {
        ...state,
        product: action.data.data,
        total_count: action.data.total_count,
      };
    }
    case CREATE_PRODUCT_SUCCEED: {
      return {
        ...state,
        product: action.data.data,
      };
    }
    case UPDATE_PRODUCT_SUCCEED: {
      return {
        ...state,
        product: action.data.data,
      };
    }
    case SEARCH_PRODUCT_SUCCEED: {
      return {
        ...state,
        search: action.data,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
