import React from 'react';

import DonationsBio from '../DonationsBio';

const Donations = ({charity, donations}) => {
  return (
    <div className="donations__section container">
      <DonationsBio charity={charity} />
    </div>
  )
}

export default Donations;