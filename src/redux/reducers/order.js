import { FETCH_ORDERS_SUCCEED, UPDATE_ORDER_SUCCEED } from "../actions/order";

export default (
  state = {
    order: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCEED: {
      return {
        ...state,
        order: action.data.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
