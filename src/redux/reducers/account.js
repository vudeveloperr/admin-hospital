import { LOGIN_SUCCEED } from "../actions/account";

export default (
  state = {
    token: "",
  },
  action
) => {
  switch (action.type) {
    case LOGIN_SUCCEED: {
      return {
        ...state,
        token: action.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
