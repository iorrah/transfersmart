import React from 'react';
import AmountEntry from './AmountEntry';
import capitalize from '../utils/capitalize';
import Mock from '../utils/Mock';
import './Conversor.css';

const API = {
  host: 'https://txf-ecb.glitch.me',
  path: 'rates',
  url() {
    return this.host + '/' + this.path;
  }
}

class Conversor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: [],
      from: {},
      to: {},
    };
  }

  fetchData() {
    /*
      The API does not seem to be working
      at present but this methos was supposed
      to fetch the needed data and set it to
      our state properties.
    */

    fetch(API.url())
      .then(function(response) { response.json(); })
      .then(function(data) {

        let rates = data.rates;
        let from = { currency: data.base, rate: 0 };
        let to = rates[0];
        rates.push(to);

        this.setState({ rates });
        this.setState({ from });
        this.setState({ to });
      });
  }

  componentDidMount() {
    let rates = Mock.rates;
    let from = { currency: Mock.base };
    let to = rates[0];

    this.setState({ rates });
    this.setState({ from });
    this.setState({ to });
  }

  buildEntrySetupSend() {
    let to = this.state.to;

    return {
      desc: 'You send',
      is_locked: true,
      selected: to
    }
  }

  buildEntrySetupGet() {
    let from = this.state.from;

    return {
      desc: 'Their get',
      is_locked: false,
      selected: from
    }
  }

  renderAmountEntry(mode) {
    let method = 'buildEntrySetup' + capitalize(mode);
    let setup = this[method]();

    return (
      <AmountEntry
        setup={setup}
        rates={this.state.rates}
      />
    )
  }

  render() {
    return (
      <div className="conversor">
        {this.renderAmountEntry('send')}
        {this.renderAmountEntry('get')}
      </div>
    );
  }
}

export default Conversor;
