import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './app.css';
import appSettings from './app/app-settings';
import Header from './app/header';
import Footer from './app/footer';
import Section from './app/section';
import AboutUs from './app/about-us';
import FAQ from './app/faq';
import Rates from './app/rates';
import LogIn from './app/log-in';
import SignUp from './app/sign-up';

const App = () => (
  <Router basename={appSettings.base_name}>
    <div className="app">
      <Header />
      <Route exact path="/" component={Section} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/faq" component={FAQ} />
      <Route path="/rates" component={Rates} />
      <Route path="/log-in" component={LogIn} />
      <Route path="/sign-up" component={SignUp} />
      <Footer />
    </div>
  </Router>
);

export default App;
