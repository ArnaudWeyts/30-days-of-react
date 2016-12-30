import React from 'react';
import { Link } from 'react-router';

export const Navbar = () => (
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
  </div>
);

export default Navbar;
