import React from 'react';
import '../../styles/stationery.css';
import StationeryWIP from '../stationery-wip';

const Rates = function () {
  return (
    <div className="stationery">
      <div className="wall"></div>

      <div className="wrapper papper">
        <h1 className="hidden">Rates</h1>
        <StationeryWIP />
      </div>
    </div>
  );
};

export default Rates;