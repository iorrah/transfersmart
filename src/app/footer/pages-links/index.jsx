import React from 'react';

const PagesLinks = function () {
  return (
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
  );
};

export default PagesLinks;
