import React from 'react';
import './AboutUs.css';

const AboutUs = function () {
  return (
    <div className="about-us">
      <div className="support"></div>

      <div className="wrapper papper">
        <h1>About Us</h1>

        <p>
          TransferSmart is a simple and Free & <a href="https://github.com/iorrah/transfersmart" title="Access this project's official resitory on GitHub" target="_blank" rel="noopener noreferrer">Open Source</a> web application that enables the <a href="https://www.google.com/search?q=exchange+rates" title="Google has a currency conversion service as well" target="_blank" rel="noopener noreferrer">currency conversion</a> from EUR to multiple foreign currencies e.g. AUD, BRL, CAD, GBP, USD, etc.
        </p>

        <h2>Data Resouce</h2>

        <p>
          The data relating to the currencies and their respective rates are provided by <a href="http://fixer.io" title="See the Fixer.io website" target="_blank" rel="noopener noreferrer">Fixer.io</a>, a third-party JSON API mantained under the <a href="https://choosealicense.com/licenses/mit/" title="Find more details about this license here" target="_blank" rel="noopener noreferrer">MIT License</a>.
        </p>

        <p>
          Fixer.io is free and allows access to current and historical foreign exchange rates.
        </p>

        <p>
          The exchange rates provided by the Fixer.io API are updated daily around <a href="https://www.google.com/search?q=4PM+CET" title="Central European Time" target="_blank" rel="noopener noreferrer">4PM CET</a> according to their website, based on data published by the <a href="https://www.ecb.europa.eu/home/html/index.en.html" title="Visit the European Central Bank official website" target="_blank" rel="noopener noreferrer">European Central Bank</a>.
        </p>

        <h2>Technology Stack</h2>

        <p>
          This application is built with web technologies based mainly on the <a href="https://en.wikipedia.org/wiki/JavaScript" title="Read more about JavaScript here" target="_blank" rel="noopener noreferrer">JavaScript</a> language and its derived libraries and frameworks.
        </p>

        <p>
          The main JavaScript framework used in the application is <a href="https://reactjs.org" title="See the React.js official website here" target="_blank" rel="noopener noreferrer">React.js</a>, which is responsible for managing our components and their behavior.
        </p>

        <p>
          The project structure was generated using <a href="https://github.com/facebookincubator/create-react-app" title="Access this project's official resitory on GitHub" target="_blank" rel="noopener noreferrer">Create React App</a> and the folder chain follows a modular and hierarchical model.
        </p>

        <p>
          The application design plays an important role in terms of usability and every style was written in <a href="http://sass-lang.com/" title="See the SASS official website here" target="_blank" rel="noopener noreferrer">SASS</a> and transpilated to <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" title="Read more about CSS here" target="_blank" rel="noopener noreferrer">CSS</a> through an <a href="https://www.npmjs.com" title="Visit the NPM official website" target="_blank" rel="noopener noreferrer">NPM</a> package called <a href="https://github.com/michaelwayman/node-sass-chokidar" title="Access this project's official resitory on GitHub" target="_blank" rel="noopener noreferrer">node-sass-chokidar</a>, a thin wrapper around <a href="https://github.com/sass/node-sass" title="Find this project's official resitory on GitHub" target="_blank" rel="noopener noreferrer">node-sass</a> executable.
        </p>

        <h2>How does it work</h2>

        <p>
          Every time the application is loaded by a user, a request for the Fixer.io API will be executed and the data received in response will be stored in a browser session called <code>sessionStorage</code>.
        </p>

        <p>
          In this way, if the page is loaded multiple times, we can prevent that further requests will be made to the data provider.
        </p>

        <h2>License and Contribution</h2>

        <p>
          This project is <a href="https://github.com/iorrah/transfersmart/blob/master/LICENSE" title="See our License page on GitHub" target="_blank" rel="noopener noreferrer">maintained</a> under the MIT License and <a href="https://github.com/iorrah/transfersmart/blob/master/CONTRIBUTING.md" title="See our Contributing page on GitHub" target="_blank" rel="noopener noreferrer">open</a> for constructive criticism and improvements.
        </p>

        <h2>Disclaimer</h2>

        <p>
          The information presented on this application is provided "as is" <b>without warranty of any kind</b>. TransferSmart does not accept any responsibility or liability for the accuracy, content, completeness, legality, or reliability of the information contained on this website. More information on this regard is available <a href="https://github.com/iorrah/transfersmart/blob/master/DISCLAIMER.md" title="See our Disclaimer page on GitHub" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
