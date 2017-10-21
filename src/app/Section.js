import React from 'react';
import Conversor from './Conversor';
import './Section.css';

class Section extends React.Component {
  render() {
    return (
      <section>
        <div className="row wrapper">
          <div className="col col-ad">
            <div className="ad">
              <h1>
                The smart path to
                trustful currencies
                conversions
              </h1>

              <p className="quote">&ldquo;</p>

              <p>
                Because we possess
                the quality of being
                trustworthy and
                performing
                consistently
                well<span className="roboto">&rdquo;</span>
              </p>

              <p className="author">
                &ndash; John Doe
              </p>
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
