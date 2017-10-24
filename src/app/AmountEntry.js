import React from 'react';
import SelectRate from './SelectRate';
import 'react-select/dist/react-select.css';
import './AmountEntry.css';

class AmountEntry extends React.Component {
  constructor(props) {
    super(props);

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeCurrency = this.onChangeCurrency.bind(this);

    this.state = {
      is_focused: false
    }
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

  onFocus() {
    this.setState({ is_focused: true });
  }

  onBlur() {
    this.setState({ is_focused: false });
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

    let classNameAmountEntry = 'amount-entry';

    if (this.state.is_focused) {
      classNameAmountEntry += ' is-focused';
    }

    return (
      <div className={classNameAmountEntry}>
        {/*<div className="amount-entry-content">*/}
          <p>{desc}</p>

          <input
            type="text"
            name={`amount-${mode}`}
            value={amount}
            onChange={this.onChangeAmount}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            autoFocus={(mode == 'from') && true} />

          <SelectRate
            options={options}
            value={value}
            disabled={isLocked}
            clearable={false}
            name={`currency-${mode}`}
            onChange={(value) => this.onChangeCurrency(value)}
            onFocusSelectRate={this.onFocus}
            onBlurSelectRate={this.onBlur}
          />
        {/*</div>*/}
      </div>
    );
  }
}

export default AmountEntry;
