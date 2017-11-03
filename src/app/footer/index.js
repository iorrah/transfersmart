import React from 'react';

import {
  FaGithub,
  FaSquare,
  FaBalanceScale,
  FaCodeFork, } from 'react-icons/lib/fa';

import './styles.css';

const Footer = function () {
  return (
    <footer>
      <div className="links wrapper">
        <ul className="pages">
          <li>
            <a href="https://github.com/iorrah/transfersmart/pulls" title="See the Pull Requests page on GitHub" target="_blank" rel="noopener noreferrer">
              Pull Requests
            </a>
          </li>

          <li><span>&bull;</span></li>

          <li>
            <a href="https://github.com/iorrah/transfersmart/issues" title="See the Issues page on GitHub" target="_blank" rel="noopener noreferrer">
              Issues
            </a>
          </li>

          <li><span>&bull;</span></li>

          <li>
            <a href="https://github.com/iorrah/transfersmart/blob/master/DISCLAIMER.md" title="See the Disclaimer page on GitHub" target="_blank" rel="noopener noreferrer">
              Disclaimer
            </a>
          </li>
        </ul>

        <ul className="social">
          <li>
            <a href="https://github.com/iorrah/transfersmart" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack">
                <FaSquare />
                <FaGithub />
              </span>
            </a>
          </li>

          <li>
            <a href="https://github.com/iorrah/transfersmart/blob/master/LICENSE" title="See the License page on GitHub" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack">
                <FaSquare />
                <FaBalanceScale />
              </span>
            </a>
          </li>

          <li>
            <a href="https://github.com/iorrah/transfersmart/blob/master/CONTRIBUTING.md" title="See the Contributing page on GitHub" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack">
                <FaSquare />
                <FaCodeFork />
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        © 2017 Copyright&nbsp;

        <a href="http://www.iorrah.com/transfersmart">
          TransferSmart
        </a>
      </div>
    </footer>
  );
};

export default Footer;
