import React from 'react';
import PropTypes from 'prop-types';
import DonationItem from '../DonationItem';

import './styles.scss';

const DonationItems = ({ donations }) => (
  <div className="donation-items__wrapper">
    {
      donations && donations.donations.map((donation, i) => (
        <div className="donation-item" key={i}>
          <DonationItem data={donation} />
        </div>
      ))
    }
  </div>
);

DonationItems.propTypes = {
  donations: PropTypes.object
};

export default DonationItems;
