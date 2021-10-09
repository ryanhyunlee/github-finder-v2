import { useState, useContext } from "react";
import GithubContext from "../../../context/github/githubContext";
import Alert from "../alert/Alert";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const { setAlert } = githubContext;

  const onChange = (e) => {
    setText(e.target.value);
  };

  // Handles setting alert and search users
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter username");
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    } else {
      setAlert(null);
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div className='search'>
      <form onSubmit={onSubmit} className='form'>
        <input
          onChange={onChange}
          type='text'
          className='search-bar'
          placeholder='Search User'
          value={text}
        />
      </form>
      <Alert />
    </div>
  );
};

export default Search;
