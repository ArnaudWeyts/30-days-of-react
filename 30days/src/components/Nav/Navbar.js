import React from 'react';
import { Link } from 'react-router';

export const Navbar = ({currentUser}) => (
  <div className="navbar">
    <Link
      className="link"
      to="/home"
      activeClassName="active">
        Home
    </Link>
    <Link
      className="link"
      to="/about"
      activeClassName="active">
        About
    </Link>
    {currentUser.loggedIn ?
      <Link
        className="link"
        to="/logout"
        activeClassName="active">Logout</Link> :
      <Link
        className="link"
        to="/login"
        activeClassName="active">Login</Link>
    }
  </div>
);

export default Navbar;
