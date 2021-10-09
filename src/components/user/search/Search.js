import { useState, useContext } from "react";
import GithubContext from "../../../context/github/githubContext";
import Alert from "../alert/Alert";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text == "") {
      githubContext.setAlert("Please enter username");
      setTimeout(() => {
        githubContext.setAlert(null);
      }, 3000);
    } else {
      githubContext.setAlert(null);
      githubContext.searchUsers(text);
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
