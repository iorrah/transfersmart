import React from 'react';

class Ad extends React.Component {
  render() {
    return (
      <div>
        <h1>
          The smart path to
          trustful currencies
          conversions
        </h1>

        <div className="quotation">
          <p className="quote">&ldquo;</p>

          <p className="phrase">
            Because we possess
            the quality of being
            trustworthy and
            performing
            consistently
            well<span className="roboto">&rdquo;</span>
          </p>

          <p className="author">
            &ndash; John Doe, Founder & CEO
          </p>
        </div>
      </div>
    );
  }
}

export default Ad;
