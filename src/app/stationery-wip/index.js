import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaAngleLeft } from 'react-icons/lib/fa';
import './styles.css';

const StationeryWIP = function () {
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
        <Link to="/"
          className="btn btn-white btn-circular btn-rz-1 z-depth-1"
          title="Go back">
          <FaAngleLeft />
        </Link>
      </div>
    </div>
  );
};

export default StationeryWIP;
