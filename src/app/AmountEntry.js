import React from 'react';
import './AmountEntry.css';

class AmountEntry extends React.Component {
  render() {
    let action = this.props.action;

    return (
      <div className="amount-entry">
        <p>{action}</p>

        <input type="text" value="1000" />

        <select>
          <option>EUR</option>
          <option>EUR</option>
          <option>EUR</option>
          <option>EUR</option>
        </select>
      </div>
    );
  }
}

export default AmountEntry;
