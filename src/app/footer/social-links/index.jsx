import React from 'react';

import {
  FaGithub,
  FaSquare,
  FaBalanceScale,
  FaCodeFork } from 'react-icons/lib/fa';

class SocialLinks extends React.Component {
  liItem(href, title, icon) {
    return (
      <li>
        <a href={href} target="_blank" title={title} rel="noopener noreferrer">
          <span className="fa-stack">
            <FaSquare /> {icon}
          </span>
        </a>
      </li>
    );
  }

  render() {
    const ghProjectUrl = 'https://github.com/iorrah/transfersmart';

    return (
      <ul className="social">
        { this.liItem(
          `${ghProjectUrl}`,
          'See this project on GitHub',
          <FaGithub />) }

        { this.liItem(
          `${ghProjectUrl}/blob/master/LICENSE`,
          'See the License page on GitHub',
          <FaBalanceScale />) }

        { this.liItem(
          `${ghProjectUrl}/blob/master/CONTRIBUTING.md`,
          'See the Contributing page on GitHub',
          <FaCodeFork />) }
      </ul>
    );
  }
}

export default SocialLinks;
