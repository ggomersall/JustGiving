import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Care = ({likes, handleCareUpdate, care}) => {
  return (
    <div className="care__wrapper">
      <div className="care__button">
        <button className={classNames({'cared': care != false})} onClick={handleCareUpdate}>{care === false ? 'Care' : 'I care'}</button>
      </div>
      <div className="care__totals">
        <span className="arrow__left"></span>
        <span className="bordered">{likes}</span>
      </div>
    </div>
  )
}

export default Care;