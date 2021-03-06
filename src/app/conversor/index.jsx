import React from 'react';
import AmountEntry from '../amount-entry';
import RateDetails from '../rate-details';
import capitalize from '../../utils/formatter/string/capitalize';
import memory from '../memory';
import { fetchDataIfNeeded } from '../fetch-data';

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
      date: '',
      memories: [],
      errors: [],
    };

    this.convert = this.convert.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getConvertedSpec = this.getConvertedSpec.bind(this);
    this.justConvert = this.justConvert.bind(this);
    this.agnosticFromAndToLog = this.agnosticFromAndToLog.bind(this);
  }

  getUSDRate(rates) {
    const rate = rates.find(e => e.currency === 'USD');

    if (rate && rate.iso && rate.rate) {
      return rate;
    }

    return null;
  }

  getEURRate(rates) {
    const rate = rates.find(e => e.currency === 'EUR');

    if (rate && rate.iso && rate.rate) {
      return rate;
    }

    return null;
  }

  setInitialState(promise) {
    promise.then((response) => {
      if (!(response && response.json)) {
        return response;
      } else if (response.json) {
        return response.json();
      }
      sessionStorage.removeItem('TS_API');
      throw new Error('Error: could not find a valid data source');
    })
      .catch((err) => {
        this.state.errors.push(err);
      })
      .then((data) => {
        let rates = [],
          { date } = data;

        for (const key in data.rates) {
          rates.push({
            currency: key,
            iso: (key || '').substr(0, 2).toLowerCase(),
            rate: data.rates[key],
          });
        }

        if (!sessionStorage.getItem('TS_API')) {
          sessionStorage.setItem('TS_API', JSON.stringify(data));
        }

        return new Promise((resolve, reject) => setTimeout(() => {
          const from = {
            currency: data.base,
            rate: 1,
            iso: (data.base || '').substr(0, 2).toLowerCase(),
          };

          rates.push(Object.assign({}, from));

          from.amount = 1;
          const to = Object.assign({}, from);

          from.setup = new this.CreateSetupAttr(
            'You wanto to convert:',
            true,
            'from',
            from.iso,
          );

          to.setup = new this.CreateSetupAttr(
            'To this amount:',
            false,
            'to',
            to.iso,
          );

          const newState = { rates, date, from, to };
          this.setState(newState, this.agnosticFromAndToLog);

          return resolve(true);
        }, 0)).then(() => {
          let specTo = Object.assign({}, this.getUSDRate(this.state.rates));

          if (!specTo) {
            specTo = Object.assign({}, this.getEURRate(this.state.rates));
          }

          specTo.setup = Object.assign({}, this.state.to.setup);
          specTo.amount = null;
          const newToSpec = Object.assign({}, this.getConvertedSpec.call(this, specTo));
          return this.setState({ to: newToSpec }, this.agnosticFromAndToLog);
        });
      });
  }

  componentDidMount() {
    this.setInitialState(fetchDataIfNeeded.call(this));
  }

  CreateSetupAttr(desc, locked, mode, iso) {
    this.desc = desc;
    this.is_locked = locked;
    this.mode = mode;
    this.iso = iso;
    return this;
  }

  getConvertedSpec(spec) {
    const { currency, rate } = spec;
    const { mode } = spec.setup;
    const invertedMode = this.invertMode(mode);
    const selected = Object.assign({}, this.state[mode]);

    selected.amount = null;
    selected.currency = currency;
    selected.rate = rate;

    return this.justConvert(selected, this.state[invertedMode]);
  }

  onChange(spec) {
    const { amount, currency, rate } = spec;
    const { mode, iso } = spec.setup;
    const invertedMode = this.invertMode(mode);
    const selected = this.state[mode];

    selected.amount = amount;
    selected.currency = currency;
    selected.rate = rate;
    selected.iso = iso;

    const specs = this.convert(selected, this.state[invertedMode]);
    this.setState({ specs }, this.agnosticFromAndToLog);
  }

  justConvert(outdatedSpec, updatedSpec) {
    const outdatedMode = outdatedSpec.setup.mode;
    const method = `convertThe${capitalize(outdatedMode)}Field`;
    const toReturn = Object.assign({}, outdatedSpec);
    toReturn.amount = this[method](outdatedSpec, updatedSpec);
    return toReturn;
  }

  convert(iOutdatedSpec, iUpdatedSpec) {
    const iOutdatedMode = iOutdatedSpec.setup.mode;
    const iUpdatedMode = iUpdatedSpec.setup.mode;

    const specs = {
      [iOutdatedMode]: iOutdatedSpec,
      [iUpdatedMode]: iUpdatedSpec,
    };

    const {
      outdatedMode,
      updatedMode,
    } = memory.getUpdatedAndOutdatedModes.call(this, specs);

    const outdatedSpec = specs[outdatedMode];
    const updatedSpec = specs[updatedMode];

    outdatedSpec.setup.mode = outdatedMode;
    updatedSpec.setup.mode = updatedMode;

    const method = `convertThe${capitalize(outdatedMode)}Field`;
    outdatedSpec.amount = this[method](outdatedSpec, updatedSpec);

    return {
      [outdatedMode]: outdatedSpec,
      [updatedMode]: updatedSpec,
    };
  }

  agnosticFromAndToLog(from = null, to = null) {
    let log;

    if (from && to) {
      log = { from, to };
    } else {
      log = {
        from: Object.assign({}, this.state.from),
        to: Object.assign({}, this.state.to),
      };
    }

    memory.save.call(this, log);
  }

  convertTheFromField(outdated, updated) {
    /*

      This method should
      only be used after:

        - the 'from' select has been changed (x)
        - or the 'to' input has been changed

   */

    return updated.amount / updated.rate;
  }

  convertTheToField(outdated, updated) {
    /*

      This method should
      only be used after:

        - the 'from' input has been changed
        - or the 'to' select has been changed

   */

    return updated.amount * outdated.rate;
  }

  invertMode(mode) {
    const modes = ['from', 'to'];
    modes.splice(modes.indexOf(mode), 1);
    return modes[0];
  }

  renderAmountEntry(mode) {
    return (
      <AmountEntry
        onChange={this.onChange}
        rates={this.state.rates}
        selected={this.state[mode]}
      />
    );
  }

  render() {
    return (
      <div className="conversor">
        {this.renderAmountEntry('from')}

        <RateDetails
          date={this.state.date}
          from={this.state.from}
          to={this.state.to}
        />

        {this.renderAmountEntry('to')}
      </div>
    );
  }
}

export default Conversor;
