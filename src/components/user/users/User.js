import { Link } from "react-router-dom";

const User = ({ user: { login, avatar_url } }) => {
  return (
    <div className='user'>
      <img className='avatar' src={avatar_url} alt='avatar' />
      <h3 className='login'>{login}</h3>
      <Link to={`/:${login}`}>
        <button className='btn btn-dark'>More</button>
      </Link>
    </div>
  );
};

export default User;
