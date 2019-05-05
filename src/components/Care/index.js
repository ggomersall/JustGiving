import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';

const Care = ({ likes, handleCareUpdate, care }) => (
  <div className="care__wrapper">
    <div className="care__button">
      <button className={classNames({ cared: care != false })} onClick={handleCareUpdate}>{care === false ? 'Care' : 'I care'}</button>
    </div>
    <div className="care__totals">
      <span>{likes}</span>
    </div>
  </div>
);

Care.propTypes = {
  likes: PropTypes.number,
  handleCareUpdate: PropTypes.func,
  care: PropTypes.bool
};

export default Care;
