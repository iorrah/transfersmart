import React from 'react';
import '../styles/stationery.css';
import StationeryWIP from './StationeryWIP';

const LogIn = function () {
  return (
    <div className="stationery">
      <div className="wall"></div>

      <div className="wrapper papper">
        <h1 className="hidden">Log In</h1>
        <StationeryWIP />
      </div>
    </div>
  );
};

export default LogIn;
