import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
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
                <i className="fa fa-twitter">
                  Twitter
                </i>
              </a>
            </li>

            <li><span>&bull;</span></li>

            <li>
              <a href="/">
                <i className="fa fa-facebook">
                  Facebook
                </i>
              </a>
            </li>

            <li><span>&bull;</span></li>

            <li>
              <a href="/">
                <i className="fa fa-linkedin">
                  LinkedIn
                </i>
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          © 2017 Copyright TransferSmart
        </div>
      </footer>
    );
  }
}

export default Footer;
