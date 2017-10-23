import React from 'react';
import AmountEntry from './AmountEntry';
import capitalize from '../utils/capitalize';
import Mock from '../utils/Mock';
import './Conversor.css';

const API = {
  host: 'https://txf-ecb.glitch.me',
  path: 'rates',
  url() {
    return `${this.host}/${this.path}`;
  },
};

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

  fetchData() {
    /*
      The API does not seem to be working
      at present but this method was supposed
      to fetch the needed data and set it to
      our state properties.
    */

    // fetch(API.url())
    //   .then((response) => { response.json(); })
    //   .then(function (data) {
    //     const rates = data.rates;
    //     const from = { currency: data.base, rate: 0 };
    //     const to = rates[0];
    //     rates.push(to);

    //     this.setState({ rates });
    //     this.setState({ from });
    //     this.setState({ to });
    //   });

    /*

      Must handle any errors that hapen
      in the process:

      .catch(e) {
        this.errors.push(e);
      }

    */

    return fetch(API.url())
      .then((response) => { response.json(); })
      .then(function (data) {
        return data;
      });
  }

  fetchMockData() {
    let resolve = (data) => {
      return data;
    };

    let reject = (desc) => {
      console.error('Error: ' + desc);
    };

    return new Promise((resolve, reject) => {
      setTimeout(function() {
        if (Mock.base) {
          return resolve(Mock);
        } else {
          return reject('things went badly');
        }
      }, 1000);
    });
  }

  setInitialState(promise) {
    // promise.then(function(data) {
    //   debugger;
    // }.bind(this));

    promise.then(function(data) {
      let from = {
        currency: data.base,
        rate: 1,
      };

      let rates = data.rates;
      rates.push(Object.assign({}, from));

      from.amount = 100;
      let to = Object.assign({}, rates[0]);
      to.amount = (from.amount * to.rate);

      from.setup = new this.CreateSetupAttr(
        'You wanto to convert:',
        true,
        'from'
      );

      to.setup = new this.CreateSetupAttr(
        'To this currency:',
        false,
        'to'
      );

      this.setState({ rates, from, to });
    }.bind(this));
  }

  componentDidMount() {
    this.setInitialState(this.fetchMockData());
  }

  CreateSetupAttr(desc, locked, mode) {
    this.desc = desc;
    this.is_locked = locked;
    this.mode = mode;
    return this;
  }

  history = {
    save(spec) {
      const { history } = this.state;

      this.setState({
        history: history.concat([spec]),
      });
    },

    hasChanged(spec) {
      return (spec.amount !== this.state[spec.setup.mode].amount) ||
        (spec.currency !== this.state[spec.setup.mode].currency);
    }
  }

  onChange(spec) {
    if (!this.history.hasChanged.call(this, spec)) {
      return;
    }

    this.history.save.call(this, spec);

    const { amount, currency, rate } = spec;
    const { mode } = spec.setup;
    let selected = this.state[mode];

    selected.amount = amount;
    selected.currency = currency;
    selected.rate = rate;

    this.setState({ [mode]: selected }, this.convert);

    // this.setState({
    //   [spec.mode]: {
    //     ...this.state[spec.mode],
    //     amount: spec.amount,
    //     currency: spec.currency,
    //   }
    // });
  }

  convert() {
    let { history } = this.state;
    const updatedMode = history[history.length - 1].setup.mode;
    const outdatedMode = this.invertMode(updatedMode);

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
