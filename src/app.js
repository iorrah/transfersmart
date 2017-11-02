import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './app.css';
import appSettings from './app/AppSettings';
import Header from './app/Header';
import Footer from './app/Footer';
import Section from './app/Section';
import AboutUs from './app/AboutUs';
import FAQ from './app/FAQ';
import Rates from './app/Rates';
import LogIn from './app/LogIn';
import SignUp from './app/SignUp';

const App = () => (
  <Router basename={appSettings.base_name}>
    <div className="app">
      <Header />
      <Route exact path="/" component={Section} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/Rates" component={Rates} />
      <Route path="/LogIn" component={LogIn} />
      <Route path="/SignUp" component={SignUp} />
      <Footer />
    </div>
  </Router>
);

export default App;
