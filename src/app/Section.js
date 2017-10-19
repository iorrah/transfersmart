import React from 'react';
import AmountEntry from './AmountEntry';
import './Section.css';

class Section extends React.Component {
  renderAmountEntry(actionType) {
    let action = (actionType === 'send' ?
      'You send' :
      'Their get');

    return (
      <AmountEntry action={action} />
    )
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col col-ad">
            <div className="ad">
              <h1>
                An smart path to<br />
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
              {this.renderAmountEntry('send')}
              {this.renderAmountEntry('get')}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
