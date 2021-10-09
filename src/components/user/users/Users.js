import { useContext } from "react";
import GithubContext from "../../../context/github/githubContext";
import User from "./User";

const Users = () => {
  const githubContext = useContext(GithubContext);

  return (
    <>
      {githubContext.users.length > 0 ? (
        <i
          onClick={() => githubContext.clearUsers()}
          className='fas fa-user-times clear-users'
        ></i>
      ) : null}
      <div className='users'>
        {githubContext.users.map((user) => (
          <User user={user} key={user.login} />
        ))}
      </div>
    </>
  );
};

export default Users;
