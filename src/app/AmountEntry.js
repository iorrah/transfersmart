import React from 'react';
import Select from 'react-select';
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
    // let amount = (e.target.value * 1.00) || 1;

    // if (isNaN(amount * 100)) {
    //   return;
    // }

    let selected = Object.assign({}, this.props.selected);
    selected.amount = (e.target.value * 100) || 0;;
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
    if (!object.value) {
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

    let { amount, currency } = selected;
    amount = amount / 100;
    const { desc, mode } = selected.setup;
    const isLocked = selected.setup.is_locked;

    const options = this.props.rates.map((e) => {
      return {
        label: e.currency,
        value: e.currency,
        rate: e.rate,
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

        <Select
          name={`currency-${mode}`}
          value={currency}
          options={options}
          onChange={this.onChangeCurrency}
          disabled={isLocked}
          clearable={false}
        />
      </div>
    );
  }
}

export default AmountEntry;
