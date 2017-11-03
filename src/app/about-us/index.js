import React from 'react';
import './styles.css';

const AboutUs = function () {
  return (
    <div className="about-us stationery">
      <div className="wall" />

      <div className="wrapper papper">
        <h1>About Us</h1>

        <p>
          TransferSmart is a simple, free and <a href="https://github.com/iorrah/transfersmart" title="Access this project's official resitory on GitHub" target="_blank" rel="noopener noreferrer">open source</a> web application that enables <a href="https://www.google.com/search?q=currency+conversion" title="Similar feature provided by Google" target="_blank" rel="noopener noreferrer">currency conversion</a> simulations from <a href="https://en.wikipedia.org/wiki/Euro" title="Euro" target="_blank" rel="noopener noreferrer">EUR</a> to multiple other currencies, such as <a href="https://en.wikipedia.org/wiki/Australian_dollar" title="Australian Dollar" target="_blank" rel="noopener noreferrer">AUD</a>, <a href="https://en.wikipedia.org/wiki/Brazilian_real" title="Brazilian Real" target="_blank" rel="noopener noreferrer">BRL</a>, <a href="https://en.wikipedia.org/wiki/Canadian_dollar" title="Canadian Dollar" target="_blank" rel="noopener noreferrer">CAD</a>, <a href="https://en.wikipedia.org/wiki/Pound_sterling" title="Pound Sterling" target="_blank" rel="noopener noreferrer">GBP</a>, <a href="https://en.wikipedia.org/wiki/United_States_dollar" title="United States Dollar" target="_blank" rel="noopener noreferrer">USD</a>, etc.
        </p>

        <h2>Technology Stack</h2>

        <p>
          This application has been built with web technologies based mainly on <a href="https://en.wikipedia.org/wiki/JavaScript" title="Read more about JavaScript here" target="_blank" rel="noopener noreferrer">JavaScript</a> and its derived frameworks / libraries.
        </p>

        <p>
          The main JavaScript framework used in the application is <a href="https://reactjs.org" title="See the React.js official website here" target="_blank" rel="noopener noreferrer">React.js</a>, which is responsible for managing our components, data flow, events handling and states settings.
        </p>

        <p>
          The project structure was generated using <a href="https://github.com/facebookincubator/create-react-app" title="Access this project's official resitory on GitHub" target="_blank" rel="noopener noreferrer">Create React App</a> and the folder chain follows a modular and hierarchical model.
        </p>

        <p>
          The application's design plays an important role in terms of usability and our entire stylesheets have been originally written in <a href="http://sass-lang.com/" title="See the SASS official website here" target="_blank" rel="noopener noreferrer">SASS</a> and transpilated to <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" title="Read more about CSS here" target="_blank" rel="noopener noreferrer">CSS</a> through a <a href="https://www.npmjs.com" title="Visit the NPM official website" target="_blank" rel="noopener noreferrer">NPM</a> package called <a href="https://github.com/michaelwayman/node-sass-chokidar" title="Access this project's official resitory on GitHub" target="_blank" rel="noopener noreferrer">node-sass-chokidar</a>, a thin wrapper around <a href="https://github.com/sass/node-sass" title="Find this project's official resitory on GitHub" target="_blank" rel="noopener noreferrer">node-sass</a> executable.
        </p>

        <h2>Data Resouce</h2>

        <p>
          The data relating to the currencies and their respective rates are provided by <a href="http://fixer.io" title="See the Fixer.io website" target="_blank" rel="noopener noreferrer">Fixer.io</a>, a third-party JSON API mantained under the <a href="https://choosealicense.com/licenses/mit/" title="Find more details about this license here" target="_blank" rel="noopener noreferrer">MIT License</a>. Access to the API is free and it offers content regarding to current & historical exchange rates.
        </p>

        <p>
          The exchange rates provided by the Fixer.io API are updated daily around <a href="https://www.google.com/search?q=4PM+CET" title="Central European Time" target="_blank" rel="noopener noreferrer">4PM CET</a> according to their website, based on data published by the <a href="https://www.ecb.europa.eu/home/html/index.en.html" title="Visit the European Central Bank official website" target="_blank" rel="noopener noreferrer">European Central Bank</a>.
        </p>

        <h2>How does it work</h2>

        <p>
          Every time the application is loaded by a user, a request for the Fixer.io API will be executed and the data received in response will be stored in the user's browser session.
        </p>

        <p>
          This data is afterwards used to populate the selection lists corresponding on each data entry section. By default, the base currency occupies the first and partially editable data entry section. The second data entry section is fully editable by the user.
        </p>

        <p>
          Upon the user further selections, the relationship between the selected currencies will be calculated and the result will be automatically appended in the data entry section opposite the edited one. Find <a href="https://transferwise.com/gb/blog/calculate-exchange-rate" title="Calculate exchange rate" target="_blank" rel="noopener noreferrer">here</a> more details on how to calculate currency conversion.
        </p>

        <h2>License and Contribution</h2>

        <p>
          This project is <a href="https://github.com/iorrah/transfersmart/blob/master/LICENSE" title="See our License page on GitHub" target="_blank" rel="noopener noreferrer">maintained</a> under the <a href="https://choosealicense.com/licenses/mit/" title="Find more details about this license here" target="_blank" rel="noopener noreferrer">MIT License</a>. It <a href="https://github.com/iorrah/transfersmart/blob/master/CONTRIBUTING.md" title="See our Contributing page on GitHub" target="_blank" rel="noopener noreferrer">welcomes</a> constructive <a href="https://github.com/iorrah/transfersmart/issues" title="See the Issues page on GitHub" target="_blank" rel="noopener noreferrer">reviews</a> and <a href="https://github.com/iorrah/transfersmart/pulls?utf8=%E2%9C%93&q=" title="See the Pull Requests page on GitHub" target="_blank" rel="noopener noreferrer">strives</a> improvement.
        </p>

        <h2>Disclaimer</h2>

        <p>
          Please note: the information presented on this application is provided "as is" without warranty of any kind. TransferSmart does not accept any responsibility or liability for the accuracy, content, completeness, legality, or reliability of the information contained on this website. More information on this regard is available <a href="https://github.com/iorrah/transfersmart/blob/master/DISCLAIMER.md" title="See our Disclaimer page on GitHub" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
