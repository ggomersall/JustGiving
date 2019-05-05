import React from 'react';
import PropTypes from 'prop-types';
import Care from '../Care';

import './styles.scss';

const Charity = ({
  charity, likes, handleCareUpdate, care
}) => (
  <div className="charity__section">
    <div className="charity-content__wrapper container">
      <div className="charity__logo">
        <img src={charity.logoAbsoluteUrl} width="200" />
      </div>
      <div className="charity-description__wrapper">
        <h2 className="charity__title">{charity.name}</h2>
        <h3 className="charity__statement">{`We ${charity.impactStatementWhat} to ${charity.impactStatementWhy}`}</h3>
        <div className="charity__care">
          <Care handleCareUpdate={handleCareUpdate} likes={likes} care={care} />
        </div>
      </div>
      <div className="charity-button__wrapper">
        <button className="btn btn--orange">Fundraise for us</button>
        <button className="btn btn--purple">Donate</button>
      </div>
    </div>
  </div>
);

Charity.propTypes = {
  charity: PropTypes.object,
  likes: PropTypes.number,
  handleCareUpdate: PropTypes.func,
  care: PropTypes.bool
};

export default Charity;
