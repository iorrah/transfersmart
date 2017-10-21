import React from 'react';
import './AmountEntry.css';

class AmountEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        amount: 567,
        currency: 765,
      }
    }
  }

  persist = (value, currency) => {
    let errors = this.validate(value);
    this.setState({ errors });
    let mode = this.props.mode;

    if (Object.keys(errors).length === 0) {
      this.props.onChange(value, currency, mode);
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    let attr = e.target.name.replace(`-${this.props.setup.mode}`, '');

    this.setState({
      data: { ...this.state.data, [attr]: value }
    });

    // this.debounce.apply(this.persist, value);
  }

  render() {
    const mode = this.props.setup.mode;
    const desc = this.props.setup.desc;


    const selected = this.props.setup.selected;


    // debugger

    const isLocked = this.props.setup.is_locked;
    const { rates } = this.props;

    let amount = this.state.data.amount;
    let currency = this.state.data.currency;

    return (
      <div className="amount-entry">
        <p>{desc}</p>

        <input
          type="text"
          name={`amount-${mode}`}
          value={amount}
          onChange={this.onChange} />

        <select
          value={selected}
          name={`currency-${mode}`}
          disabled={isLocked && 'disabled'}
          onChange={this.onChange}>

          {rates.map((item, index) => <option key={index}>{item.currency}</option>)}
        </select>
      </div>
    );
  }
}

export default AmountEntry;
