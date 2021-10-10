import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_ALERT,
} from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
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

export default githubReducer;
