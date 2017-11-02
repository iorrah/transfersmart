import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = function () {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <h1>TransferSmart</h1>
        </Link>

        <ul>
          <li><Link to="/AboutUs">About us</Link></li>
          <li><Link to="/">FAQ</Link></li>
          <li><Link to="/">Rates</Link></li>
          <li><Link to="/">Log In</Link></li>

          <li className="highlight">
            <Link to="/">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
