import React from 'react';
import PropTypes from 'prop-types';

import DonationsBio from '../DonationsBio';
import DonationItems from '../DonationItems';
import DonateCarousel from '../DonateCarousel';

import './styles.scss';


const Donations = ({ charity, donations }) => (
  <div className="donations__section container">
    <div className="charity-donations__header">
      <DonationsBio charity={charity} />
      <DonateCarousel charity={charity} />
    </div>
    <DonationItems donations={donations} />
  </div>
);

Donations.propTypes = {
  charity: PropTypes.object,
  donations: PropTypes.object
};

export default Donations;
