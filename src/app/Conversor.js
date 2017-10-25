import React from 'react';
import AmountEntry from './AmountEntry';
import capitalize from '../utils/capitalize';
import Mock from '../utils/Mock';

/*

  spec: object

    from/to: object
      amount: float
      currency: string
      rate: float

      setup: object
        desc:
        is_locked: boolean
        mode: string
        iso: string // duplication

  rates: array
    item: object
      currency: string
      iso: string
      rate: float

  history: array
    item: { spec }

*/

class Conversor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: [],
      from: {
        amount: 0,
        currency: '',
        rate: '',
        setup: {},
      },
      to: {
        amount: 0,
        currency: '',
        rate: '',
        setup: {},
      },
      history: []
    };

    this.convert = this.convert.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getConvertedSpec = this.getConvertedSpec.bind(this);
    this.justConvert = this.justConvert.bind(this);
    this.agnosticFromAndToLog = this.agnosticFromAndToLog.bind(this);
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
      return new Promise((resolve, reject) => {
        return setTimeout(() => {
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

          // this.history.save.call(this, {
          //   from: Object.assign({}, from),
          //   to: Object.assign({}, to)
          // });

          this.setState({ rates, from, to }, this.agnosticFromAndToLog);

          return resolve(true);
        }, 1000);
      }).then(function(something) {
        // we are going to set the 'this.state.to' key
        // based on the user's location

        let specTo = Object.assign({}, this.state.rates[0]);
        specTo.setup = Object.assign({}, this.state.to.setup);

        specTo.amount = null;
        let newToSpec = this.getConvertedSpec.call(this, specTo);
        return this.setState({ to: newToSpec }, this.agnosticFromAndToLog);

      }.bind(this));
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

      return this.setState({
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

  getConvertedSpec(spec) {
    const { amount, currency, rate } = spec;
    const { mode } = spec.setup;
    const invertedMode = this.invertMode(mode);
    let selected = Object.assign({}, this.state[mode]);

    selected.amount = null;
    selected.currency = currency;
    selected.rate = rate;

    return this.justConvert(selected, this.state[invertedMode]);
  }

  onChange(spec) {
    // debugger

    const { amount, currency, rate } = spec;
    const { mode } = spec.setup;
    const invertedMode = this.invertMode(mode);
    let selected = this.state[mode];

    selected.amount = amount;
    selected.currency = currency;
    selected.rate = rate;

    let toReturn = this.justConvert(selected, this.state[invertedMode]);

    this.setState({ [mode]: toReturn }, this.agnosticFromAndToLog);
  }

  justConvert(outdatedSpec, updatedSpec) {
    let outdatedMode = outdatedSpec.setup.mode;
    let updatedMode = updatedSpec.setup.mode;

    let method = `convertThe${capitalize(outdatedMode)}Field`;

    let toReturn = Object.assign({}, outdatedSpec);

    toReturn.amount = this[method](updatedSpec, outdatedSpec);

    return toReturn;
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

    this.setState(
      { [outdatedMode]: outdatedSpec },
      this.agnosticFromAndToLog
    );
  }

  agnosticFromAndToLog(from = null, to = null) {
    let log;

    if (from && to) {
      log = { from, to };
    } else {
      log = {
        from: this.state.from,
        to: this.state.to
      }
    }

    this.history.save.call(this, log);
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
    if (!(this.state.from.setup || this.state.to.setup)) {
      return;
    }

    return (
      <div className="conversor">
        {this.renderAmountEntry('from')}
        {this.renderAmountEntry('to')}
      </div>
    );
  }
}

export default Conversor;
