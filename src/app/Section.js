import React from 'react';
import Conversor from './Conversor';
import './Section.css';

class Section extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col col-ad">
            <div className="ad">
              <h1>
                A smart path to<br />
                trustful currencies
                conversions
              </h1>

              <p>
                We convert your currencies
                using data <br />
                that you can feel
                safe to rely on.
              </p>

              <a href="#">
                Find out more about us
                <span className="chevron">&rsaquo;</span>
              </a>
            </div>
          </div>

          <div className="col col-feature">
            <div className="feature">
              <Conversor />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
