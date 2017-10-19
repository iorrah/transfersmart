import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="#">
          <h1>TransferSmart</h1>
        </a>

        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Rates</a></li>
          <li><a href="#">Login</a></li>
          <li className="highlight"><a href="#">Sign Up</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
