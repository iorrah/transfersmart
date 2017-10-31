import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './app.css';
import Header from './app/Header';
import Section from './app/Section';
import AboutUs from './app/AboutUs';
import Footer from './app/Footer';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Route exact path="/" component={Section} />
      <Route path="/AboutUs" component={AboutUs} />
      <Footer />
    </div>
  </Router>
);

export default App;