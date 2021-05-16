import {
  FETCH_CATEGORY_SUCCEED,
  UPDATE_CATEGORY_SUCCEED,
  CREATE_CATEGORY_SUCCEED,
} from "../actions/category";

export default (
  state = {
    category: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCEED: {
      return {
        ...state,
        category: action.data,
      };
    }
    case UPDATE_CATEGORY_SUCCEED: {
      return {
        ...state,
        category: action.data.data,
      };
    }
    case CREATE_CATEGORY_SUCCEED: {
      return {
        ...state,
        category: action.data.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
