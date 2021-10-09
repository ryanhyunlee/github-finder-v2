import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'>
        <i className='fab fa-github-alt'></i> Github Finder
      </h1>

      <ul className='navbar-items'>
        <li className='navbar-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='navbar-item'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
