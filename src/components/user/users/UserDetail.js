import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GithubContext from "../../../context/github/githubContext";

const UserDetail = () => {
  const githubContext = useContext(GithubContext);
  const { user, repos, getRepos } = githubContext;

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  useEffect(() => {
    getRepos(login);
  }, []);

  return (
    <div className='user-detail'>
      <Link to='/' className='btn-back'>
        <i className='fas fa-hand-point-left'></i> Back to search
      </Link>

      <div className='detail'>
        <div className='top'>
          <img src={avatar_url} alt='avatar' className='avatar' />
          <hr />
          <h2>{name}</h2>
          <p>Location: {location}</p>
          {<div>{company ? <p>Working for {company}</p> : null}</div>}
          <hr />
        </div>
        <div className='bottom'>
          <div className='left'>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <div className='btns'>
              <a href={html_url} className='btn btn-github'>
                Github
              </a>
              {blog && (
                <>
                  <a href={blog} className='btn btn-website'>
                    Website
                  </a>
                </>
              )}
            </div>

            <div className='card'>
              <div className='badge badge-primary'>Followers: {followers}</div>
              <div className='badge badge-success'>Following: {following}</div>
              <div className='badge badge-light'>
                Public Repos: {public_repos}
              </div>
              <div className='badge badge-dark'>
                Public Gists: {public_gists}
              </div>
            </div>
          </div>

          <div className='right'>
            <h3>Repositories</h3>
            {repos.map((repo) => (
              <h4 className='repo'>
                <a href={repo.html_url}>{repo.name}</a>
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
