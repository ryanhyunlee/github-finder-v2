import { CLEAR_USERS, SEARCH_USERS, SET_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};
