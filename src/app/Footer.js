import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSquare,
} from 'react-icons/lib/fa';

import './Footer.css';

const Footer = function () {
  return (
    <footer>
      <div className="links wrapper">
        <ul className="pages">
          <li>
            <Link to="/AboutUs">About us</Link>
          </li>

          <li><span>&bull;</span></li>

          <li>
            <Link to="/">FAQ</Link>
          </li>

          <li><span>&bull;</span></li>

          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>

        <ul className="social">
          <li>
            <Link to="/">
              <span className="fa-stack">
                <FaSquare />
                <FaFacebook />
              </span>
            </Link>
          </li>

          <li><span /></li>

          <li>
            <Link to="/">
              <span className="fa-stack">
                <FaSquare />
                <FaTwitter />
              </span>
            </Link>
          </li>

          <li><span /></li>

          <li>
            <Link to="/">
              <span className="fa-stack">
                <FaSquare />
                <FaLinkedin />
              </span>
            </Link>
          </li>

          <li><span /></li>

          <li>
            <a href="https://github.com/iorrah/transfersmart" target="_blank">
              <span className="fa-stack">
                <FaSquare />
                <FaGithub />
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        © 2017 Copyright TransferSmart
      </div>
    </footer>
  );
};

export default Footer;
