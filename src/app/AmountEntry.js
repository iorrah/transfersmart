import React from 'react';
import './AmountEntry.css';

class AmountEntry extends React.Component {
  onChange() {
    return;
  }

  render() {
    let desc = this.props.setup.desc;
    let selected = this.props.setup.selected;
    let isLocked = this.props.setup.is_locked;
    let { rates } = this.props;

    return (
      <div className="amount-entry">
        <p>{desc}</p>

        <input type="text" onChange={this.onChange} value="1000" />

        <select value={selected} disabled={isLocked && 'disabled'}>
          {rates.map(function(item, index) {
            return <option key={index}>{item.currency}</option>
          })}
        </select>
      </div>
    );
  }
}

export default AmountEntry;
