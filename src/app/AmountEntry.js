import React from 'react';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import SelectRate from './SelectRate';
import './AmountEntry.css';

class AmountEntry extends React.Component {
  propTypes: {
    selected: PropTypes.object,
    onChange: PropTypes.func,
    rates: PropTypes.array,
  }

  constructor(props) {
    super(props);

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeCurrency = this.onChangeCurrency.bind(this);

    this.state = {
      is_focused: false,
    };
  }

  onChangeAmount(e) {
    let amount = e.target.value;

    if ((`${amount}`).indexOf('.') === (amount.length - 1)) {
      amount += '00';
    } else if (!((`${amount}`).indexOf('.') > -1)) {
      amount += '.00';
    } else if (isNaN(amount * 1)) {
      return;
    }

    amount = (amount.replace('.', '') * 1);

    const selected = Object.assign({}, this.props.selected);
    selected.amount = amount;
    this.props.onChange(selected);
  }

  onChangeCurrency(object) {
    if (!(object || object.value)) {
      return;
    }

    const selected = Object.assign({}, this.props.selected);
    selected.currency = object.value;
    selected.rate = object.rate;
    selected.iso = object.iso;
    this.props.onChange(selected);
  }

  onFocus() {
    this.setState({ is_focused: true });
  }

  onBlur() {
    this.setState({ is_focused: false });
  }

  render() {
    const { selected } = this.props;

    if (!selected.setup) {
      return null;
    }

    let { amount } = selected;
    const value = selected.currency;

    amount /= 100;

    if (!((`${amount}`).indexOf('.') > -1)) {
      amount += '.00';
    } else {
      amount = amount.toFixed(2);
    }

    const { desc, mode } = selected.setup;
    const isLocked = selected.setup.is_locked;

    const options = this.props.rates.map(e => ({
      label: e.currency,
      value: e.currency,
      rate: e.rate,
      iso: e.iso,
    }));

    let classNameAmountEntry = 'amount-entry';

    if (this.state.is_focused) {
      classNameAmountEntry += ' is-focused';
    }

    return (
      <div className={classNameAmountEntry}>
        <p>{desc}</p>

        <input
          type="text"
          name={`amount-${mode}`}
          value={amount}
          onChange={this.onChangeAmount}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          autoFocus={(mode === 'from') && true}
        />

        <SelectRate
          options={options}
          value={value}
          disabled={isLocked}
          clearable={false}
          name={`currency-${mode}`}
          onChange={value => this.onChangeCurrency(value)}
          onFocusSelectRate={this.onFocus}
          onBlurSelectRate={this.onBlur}
        />
      </div>
    );
  }
}

export default AmountEntry;
