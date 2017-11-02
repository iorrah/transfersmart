import React from 'react';

import { FaCog, FaAngleLeft } from 'react-icons/lib/fa';

import './StationeryWIP.css';

class StationeryWIP extends React.Component {
  onClick() {
    window.history.back();
  }

  render() {
    return (
      <div className="stationery-wip">
        <div className="mb-2 text-center">
          <FaCog className="cog spin" />
        </div>

        <h2>
          This section is under construction
        </h2>

        <h3>
          Please, come back again later
        </h3>

        <div className="text-center">
          <button className="btn btn-white btn-circular btn-rz-1 z-depth-1" title="Go back" onClick={this.onClick}>
            <FaAngleLeft />
          </button>
        </div>
      </div>
    );
  }
};

export default StationeryWIP;
