import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DonationsBio = ({ charity }) => (
  <div className="card donation-bio__wrapper">
    <div className="donation-bio__header">
      <h2>{charity.name}</h2>
      <h3>{charity.description}</h3>
    </div>
    <div className="donation-bio__contact">
      <p><a href={charity.websiteUrl}>{charity.websiteUrl}</a></p>
      <p><a href={`mailto:${charity.emailAddress}`}>{charity.emailAddress}</a></p>
      <p>
        {charity.name} Registered charity number ${charity.registrationNumber}
      </p>
    </div>
  </div>
);

DonationsBio.propTypes = {
  charity: PropTypes.object
};
export default DonationsBio;
