import { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ALERT,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    text: "",
    users: [],
    user: {},
    repos: [],
    alert: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    const users = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USERS, payload: users.data.items });
  };

  // Set Alert
  const setAlert = (msg) => {
    dispatch({ type: SET_ALERT, payload: msg });
  };

  // Get an user
  // Get repos
  // Clear users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  // Set Loading

  return (
    <GithubContext.Provider
      value={{
        text: state.text,
        users: state.users,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        searchUsers,
        setAlert,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
