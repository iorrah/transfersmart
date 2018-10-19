import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = function () {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <h1>TransferSmart</h1>
        </Link>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/rates">Rates</Link></li>
          <li><Link to="/log-in">Log In</Link></li>

          <li className="highlight">
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
