import React from 'react';
import { FaExchange, FaCalendarO } from 'react-icons/lib/fa';
import formatter from '../../utils/formatter';
import './styles.css';

class RateDetails extends React.Component {
  render() {
    const { from, to } = this.props;
    const updatedAt = this.props.date;

    if ((!from) || (!to)) {
      return null;
    }

    const procedure = `${from.rate} ${from.currency}`
      + ` equals to ${to.rate} ${to.currency}`;

    const date = 'These are rates from:'
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
