import React from 'react';
import PagesLinks from './pages-links';
import SocialLinks from './social-links';
import './styles.css';

const Footer = function () {
  return (
    <footer>
      <div className="links wrapper">
        <PagesLinks />
        <SocialLinks />
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
