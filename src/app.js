import React from 'react';
import './app.css';
import Header from './app/Header';
import Section from './app/Section';
import Footer from './app/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;