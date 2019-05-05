import React from 'react';

import DonationsBio from '../DonationsBio';
import DonationItems from '../DonationItems';
import DonateCarousel from '../DonateCarousel';

import './styles.scss';


const Donations = ({charity, donations}) => {
  return (
    <div className="donations__section container">
      <div className="charity-donations__header">
        <DonationsBio charity={charity} />
        <DonateCarousel charity={charity} />
      </div>
      <DonationItems donations={donations} />
    </div>
  )
}

export default Donations;