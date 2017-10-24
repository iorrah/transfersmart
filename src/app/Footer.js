import React from 'react';

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSquare,
} from 'react-icons/lib/fa';

import './Footer.css';

const Footer = function() {
  return (
    <footer>
      <div className="links wrapper">
        <ul className="pages">
          <li>
            <a href="/">FAQ</a>
          </li>

          <li><span>&bull;</span></li>

          <li>
            <a href="/">Contac</a>
          </li>

          <li><span>&bull;</span></li>

          <li>
            <a href="/">Jobs</a>
          </li>

          <li><span>&bull;</span></li>

          <li>
            <a href="/">Blog</a>
          </li>
        </ul>

        <ul className="social">
          <li>
            <a href="/">
              <span className="fa-stack">
                <FaSquare />
                <FaFacebook />
              </span>
            </a>
          </li>

          <li><span /></li>

          <li>
            <a href="/">
              <span className="fa-stack">
                <FaSquare />
                <FaTwitter />
              </span>
            </a>
          </li>

          <li><span /></li>

          <li>
            <a href="/">
              <span className="fa-stack">
                <FaSquare />
                <FaLinkedin />
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
