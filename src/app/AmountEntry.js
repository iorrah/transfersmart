import React from 'react';
import SelectRate from './SelectRate';
import 'react-select/dist/react-select.css';
import './AmountEntry.css';

class AmountEntry extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeCurrency = this.onChangeCurrency.bind(this);
  }

  setSelectedInState(selected) {
    if (!selected.setup) {
      return null;
    }

    let data = {};
    let { amount, currency } = selected;

    data.amount = amount;
    data.currency = currency;

    this.setState({ data });
  }

  persist = (value, currency) => {
    // let errors = this.validate(value);
    // this.setState({ errors });
    // let mode = this.props.mode;

    // if (Object.keys(errors).length === 0) {
    //   this.props.onChange(value, currency, mode);
    // }
  }

  onChangeAmount(e) {
    let amount = e.target.value;

    if ((amount + '').indexOf('.') === (amount.length - 1)) {
      amount = amount + '00';
    } else if (!((amount + '').indexOf('.') > -1)) {
      amount = amount + '.00';
    } else if (isNaN(amount * 1)) {
      return;
    }

    amount = (amount.replace('.', '') * 1);

    let selected = Object.assign({}, this.props.selected);
    selected.amount = amount;
    this.props.onChange(selected);

    // let attr = e.target.name.replace(`-${this.props.setup.mode}`, '');

    // this.setState({
    //   data: { ...this.state.data, [attr]: value }
    // });

    /*
      We should not execute the
      persistence immediatelly:

      this.debounce.apply(this.persist, value);
    */
  }

  onChangeCurrency(object) {
    if (!(object || object.value)) {
      return;
    }

    let selected = Object.assign({}, this.props.selected);
    selected.currency = object.value;
    selected.rate = object.rate;
    this.props.onChange(selected);
  }

  render() {
    let { selected } = this.props;

    if (!selected.setup) {
      return null;
    }

    let { amount } = selected;
    let value = selected.currency;

    amount = (amount / 100);

    if (!((amount + '').indexOf('.') > -1)) {
      amount = (amount) + '.00';
    } else {
      amount = amount.toFixed(2);
    }

    const { desc, mode } = selected.setup;
    const isLocked = selected.setup.is_locked;

    const options = this.props.rates.map((e) => {
      return {
        label: e.currency,
        value: e.currency,
        rate: e.rate,
        iso: e.iso,
      }
    });

    return (
      <div className="amount-entry">
        <p>{desc}</p>

        <input
          type="text"
          name={`amount-${mode}`}
          value={amount}
          onChange={this.onChangeAmount}
          autoFocus={isLocked && true} />

        { /* <Select
          onChange={this.onChangeCurrency}
        /> */ }

        <SelectRate
          options={options}
          value={value}
          disabled={isLocked}
          clearable={false}
          name={`currency-${mode}`}
          onChange={(value) => this.onChangeCurrency(value)}
        />
      </div>
    );
  }
}

export default AmountEntry;
