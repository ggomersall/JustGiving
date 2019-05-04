import React from 'react';

import './styles.scss';

const DonationsBio = ({charity}) => {

  return(
    <div className="card donation-bio__wrapper">
      <div className="donation-bio__header">
        <h3>{charity.name}</h3>
        <p>{charity.description}</p>
      </div>
      <div className="donation-bio__contact">
        <p>{charity.websiteUrl}</p>
        <p>{charity.emailAddress}</p>
        <p>{charity.name} Registered charity number {charity.registrationNumber}</p>
      </div>
    </div>
  )
}

export default DonationsBio