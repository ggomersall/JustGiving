import React from 'react';

import DonationsBio from '../DonationsBio';
import DonationItems from '../DonationItems';

const Donations = ({charity, donations}) => {
  return (
    <div className="donations__section container">
      <DonationsBio charity={charity} />
      <DonationItems donations={donations} />
    </div>
  )
}

export default Donations;