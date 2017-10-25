import React from 'react';
import Ad from './Ad';
import Conversor from './Conversor';
import './Section.css';

const Section = function Section() {
  return (
    <section>
      <div className="row wrapper">
        <div className="col col-ad">
          <div className="ad">
            <Ad />
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
};

export default Section;
