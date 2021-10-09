import { useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../../context/github/githubContext";

const User = ({ user: { login, avatar_url } }) => {
  const githubContext = useContext(GithubContext);

  return (
    <div className='user'>
      <img className='avatar' src={avatar_url} alt='avatar' />
      <h3 className='login'>{login}</h3>
      <Link to={`/user/${login}`}>
        <button
          onClick={() => githubContext.getUser(login)}
          className='btn btn-dark'
        >
          More
        </button>
      </Link>
    </div>
  );
};

export default User;
