import React from 'react';
import AmountEntry from './AmountEntry';
import capitalize from '../utils/capitalize';
import Mock from '../utils/Mock';

class Conversor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: [],
      from: {
        amount: 0,
        currency: '',
        rate: '',
      },
      to: {
        amount: 0,
        currency: '',
        rate: '',
      },
      history: []
    };

    this.convert = this.convert.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  fetchMockData() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        if (Mock.base) {
          return resolve(Mock);
        } else {
          return reject();
        }
      }, 1000);
    });
  }

    // promise.then(function(data) {
    //   let from = {
    //     currency: data.base,
    //     rate: 1,
    //     iso: (data.base || '').substr(0, 2).toLowerCase(),
    //   };

  setInitialState(promise) {
    promise.then(function(data) {
      let from = {
        currency: data.base,
        rate: 1,
        iso: (data.base || '').substr(0, 2).toLowerCase(),
      };

      let rates = data.rates;
      rates.push(Object.assign({}, from));

      from.amount = 100;
      let to = Object.assign({}, from);

      from.setup = new this.CreateSetupAttr(
        'You wanto to convert:',
        true,
        'from',
        from.iso
      );

      to.setup = new this.CreateSetupAttr(
        'To this amount:',
        false,
        'to',
        to.iso
      );

      this.history.save.call(this, {
        from: Object.assign({}, from),
        to: Object.assign({}, to)
      });

      this.setState({ rates, from, to });
    }.bind(this));
  }

  componentDidMount() {
    this.setInitialState(this.fetchMockData());
  }

  CreateSetupAttr(desc, locked, mode, iso) {
    this.desc = desc;
    this.is_locked = locked;
    this.mode = mode;
    this.iso = iso;
    return this;
  }

  history = {
    save(spec) {
      const { history } = this.state;

      let desc = ''
        + 'The amount of'
        + ' ' + spec.from.currency
        + ' ' + (spec.from.amount / 100)
        + ' (rate: ' + spec.from.rate + ')'
        + ' was converted to'
        + ' ' + (spec.to.amount / 100)
        + ' ' + spec.to.currency
        + ' (rate: ' + spec.to.rate + ')';

      console.info(desc);

      this.setState({
        history: history.concat([{ desc, spec }]),
      });
    },

    getLastChangesAnalysis() {
      const { history } = this.state;
      const { length } = history;
      const penultimate = history[length - 2].spec;
      const last = history[length - 1].spec;

      const isFromCurrEqual = (penultimate.from.currency === last.from.currency);
      const isFromAmountEqual = (penultimate.from.amount === last.from.amount);
      const isToCurrEqual = (penultimate.to.currency === last.to.currency);
      const isToAmountEqual = (penultimate.to.amount === last.to.amount);

      return {
        was_equal: {
          from: {
            currency: isFromCurrEqual,
            amount: isFromAmountEqual,
          },
          to: {
            currency: isToCurrEqual,
            amount: isToAmountEqual,
          },
        },
      };
    },

    hasChangedAmount() {
      const wasEqual = this
        .history
        .getLastChangesAnalysis
        .call(this)
        .was_equal;

      return (wasEqual.from.currency && (!wasEqual.from.amount)) ||
             (wasEqual.to.currency && (!wasEqual.to.amount));
    },

    hasChangedCurrency() {
      const wasEqual = this
        .history
        .getLastChangesAnalysis
        .call(this)
        .was_equal;

      return ((!wasEqual.from.currency) && wasEqual.from.amount) ||
             ((!wasEqual.to.currency) && wasEqual.to.amount);
    },

    getUpdatedAndOutdatedModes() {
      let outdatedMode, updatedMode;

      // debugger

      const wasEqual = this
        .history
        .getLastChangesAnalysis
        .call(this)
        .was_equal;

      if (!wasEqual.to.currency) {
        outdatedMode = 'to';
        updatedMode = 'from';
      } else if (wasEqual.from.currency && wasEqual.from.amount) {
        outdatedMode = 'from';
        updatedMode = 'to';
      } else if (wasEqual.to.currency && wasEqual.to.amount) {
        outdatedMode = 'to';
        updatedMode = 'from';
      }

      return { outdatedMode, updatedMode };
    }
  }

  onChange(spec) {
    const { amount, currency, rate } = spec;
    const { mode } = spec.setup;
    const invertedMode = this.invertMode(mode);
    let selected = this.state[mode];

    selected.amount = amount;
    selected.currency = currency;
    selected.rate = rate;

    this.history.save.call(this, {
      [mode]: spec,
      [invertedMode]: this.state[invertedMode]
    });

    this.setState({ [mode]: selected }, this.convert);
  }

  convert() {
    let {
      outdatedMode,
      updatedMode
    } = this.history.getUpdatedAndOutdatedModes.call(this);

    let updatedSpec = this.state[updatedMode];
    let outdatedSpec = this.state[outdatedMode];
    let method = `convertThe${capitalize(outdatedMode)}Field`;

    outdatedSpec.amount = this[method](updatedSpec, outdatedSpec);
    this.setState({ [outdatedMode]: outdatedSpec });
  }

  convertTheFromField(updated, outdated) {
    return updated.amount / updated.rate;
  }

  convertTheToField(updated, outdated) {
    return updated.amount * outdated.rate;
  }

  invertMode(mode) {
    let modes = ['from', 'to'];
    modes.splice(modes.indexOf(mode), 1);
    return modes[0];
  }

  renderAmountEntry(mode) {
    return (
      <AmountEntry
        selected={this.state[mode]}
        rates={this.state.rates}
        onChange={this.onChange}
      />
    );
  }

  render() {
    return (
      <div className="conversor">
        {this.renderAmountEntry('from')}
        {this.renderAmountEntry('to')}
      </div>
    );
  }
}

export default Conversor;
