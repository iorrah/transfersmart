import React from 'react';

import {
  FaGithub,
  FaSquare,
  FaBalanceScale,
  FaCodeFork, } from 'react-icons/lib/fa';

const SocialLinks = function () {
  return (
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
  );
};

export default SocialLinks;
