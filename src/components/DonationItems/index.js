import React from 'react';
import DonationItem from '../DonationItem';

import './styles.scss';

const DonationItems = ({donations}) => {
  return(
    <div className="donation-items__wrapper">
      {
        donations && donations.donations.map((donation, i) => {
          return (
            <div className="donation-item" key={i}>
              <DonationItem data={donation} />
            </div>
          )
        })
      }
    </div>
  )
}

export default DonationItems;