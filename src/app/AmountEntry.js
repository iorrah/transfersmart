import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './AmountEntry.css';

class AmountEntry extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   data: {
    //     amount: 567,
    //     currency: 765,
    //   }
    // }
  }

  persist = (value, currency) => {
    // let errors = this.validate(value);
    // this.setState({ errors });
    // let mode = this.props.mode;

    // if (Object.keys(errors).length === 0) {
    //   this.props.onChange(value, currency, mode);
    // }
  }

  onChange = (e) => {
    // let value = e.target.value;
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

  onChangeAmount(e) {
    debugger;
  }

  onChangeCurrency(value) {
    debugger;
  }

  render() {
    let { selected } = this.props;

    if (!selected.setup) {
      return null;
    }

    let { amount, currency } = selected;
    const { desc, mode } = selected.setup;
    const isLocked = selected.setup.is_locked;

    const options = this.props.rates.map((e) => {
      return {
        label: e.currency,
        value: e.currency
      }
    });

    return (
      <div className="amount-entry">
        <p>{desc}</p>

        <input
          type="text"
          name={`amount-${mode}`}
          value={amount}
          onChange={this.onChangeAmount} />

        <Select
          name={`currency-${mode}`}
          value={currency}
          options={options}
          onChange={this.onChangeCurrency}
        />
      </div>
    );
  }
}

export default AmountEntry;
