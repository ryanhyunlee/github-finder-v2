import GithubContext from "../../../context/github/githubContext";
import { useContext } from "react";

const Alert = () => {
  const githubContext = useContext(GithubContext);

  return (
    <div className='alert'>
      <div className='alert-danger'>{githubContext.alert}</div>
    </div>
  );
};

export default Alert;
