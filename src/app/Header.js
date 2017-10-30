import React from 'react';
import './Header.css';

const Header = function () {
  return (
    <header>
      <div className="wrapper">
        <a href="/">
          <h1>TransferSmart</h1>
        </a>

        <ul>
          <li><a href="/">About us</a></li>
          <li><a href="/">Rates</a></li>
          <li><a href="/">Login</a></li>

          <li className="highlight">
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
