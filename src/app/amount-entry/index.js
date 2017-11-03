import React from 'react';
import Cleave from 'cleave.js/react';
import 'react-select/dist/react-select.css';
import SelectRate from '../select-rate';
import './styles.css';

class AmountEntry extends React.Component {
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
    const amount = e.target.rawValue;

    if (amount === this.props.selected.amount) {
      return;
    }

    const selected = Object.assign({}, this.props.selected);
    selected.amount = amount;
    this.props.onChange(selected);
  }

  onChangeCurrency(object) {
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

    const { amount, currency } = selected;
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
        <label htmlFor={`amount-${mode}`}>{desc}</label>

        <Cleave
          options={{ numeral: true }}
          type="text"
          name={`amount-${mode}`}
          id={`amount-${mode}`}
          value={amount}
          onChange={this.onChangeAmount}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          autoFocus={(mode === 'from') && true}
        />

        <SelectRate
          options={options}
          value={currency}
          disabled={isLocked}
          clearable={false}
          name={`currency-${mode}`}
          onChange={currency => this.onChangeCurrency(currency)}
          onFocusSelectRate={this.onFocus}
          onBlurSelectRate={this.onBlur}
        />
      </div>
    );
  }
};

export default AmountEntry;
