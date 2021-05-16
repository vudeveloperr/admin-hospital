import { FETCH_ADMIN, FETCH_ADMIN_SUCCEED, UPDATE_ADMIN_SUCCEED } from "../actions/admin";

export default (
  state = {
    account: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_ADMIN_SUCCEED: {
      return {
        ...state,
        account: action.data.data,
      };
    }
    case UPDATE_ADMIN_SUCCEED: {
      return {
        ...state,
        account: action.data.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
