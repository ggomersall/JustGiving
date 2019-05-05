import React from 'react';
import PropTypes from 'prop-types';

import DonationsBio from '../DonationsBio';
import DonationItems from '../DonationItems';

const Donations = ({ charity, donations }) => (
  <div className="donations__section container">
    <DonationsBio charity={charity} />
    <DonationItems donations={donations} />
  </div>
);

Donations.propTypes = {
  charity: PropTypes.object,
  donations: PropTypes.object
};


export default Donations;
