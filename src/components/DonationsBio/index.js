import React from 'react';

import './styles.scss';

const DonationsBio = ({charity}) => {

  return(
    <div className="card donation-bio__wrapper">
      <div className="donation-bio__header">
        <h2>{charity.name}</h2>
        <h3>{charity.description}</h3>
      </div>
      <div className="donation-bio__contact">
        <p><a href={charity.websiteUrl} >{charity.websiteUrl}</a></p>
        <p><a href={`mailto:${charity.emailAddress}`}>{charity.emailAddress}</a></p>
        <p>{charity.name} Registered charity number {charity.registrationNumber}</p>
      </div>
    </div>
  )
}

export default DonationsBio