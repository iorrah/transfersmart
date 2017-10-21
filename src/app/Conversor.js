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
    };
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
        this.errors.push(error);
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

      from.amount = 1;
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

  onChange(setup) {
    debugger
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
