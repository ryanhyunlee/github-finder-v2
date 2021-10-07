import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'>
        <i className='fab fa-github-alt'></i> Github Finder
      </h1>

      <ul className='navbar-items'>
        <li className='navbar-item'>
          <a href='/'>Home</a>
        </li>
        <li className='navbar-item'>
          <a href='/'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
