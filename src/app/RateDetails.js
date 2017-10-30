import React from 'react';
import './RateDetails.css';
import formatter from '../utils/formatter';
import { FaExchange, FaCalendarO } from 'react-icons/lib/fa';

class RateDetails extends React.Component {
  render() {
    const { from, to } = this.props;
    const updatedAt = this.props.date;

    if ((!from) || (!to)) {
      return null;
    }

    const procedure = `${from.rate} ${from.currency}`
      + ` @ ${to.rate} ${to.currency}`;

    const date = 'Rates from:'
      + ` ${formatter.date.dmY(updatedAt)}`;

    return (
      <div className="rate-details">
        <p>
          <FaExchange /> {procedure}
        </p>

        <p>
          <FaCalendarO /> {date}
        </p>
      </div>
    );
  }
}

export default RateDetails;
