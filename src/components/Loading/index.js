import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import {ClipLoader} from 'react-spinners';

import './styles.scss';


const Loading = ({loading}) => {

  const override = css `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="loading__wrapper">
      <ClipLoader 
        loading={loading} 
        css={override}
        sizeUnit={'px'}
        size={70}
        color={'#882c84'}/>
      <p className="loading__text">Loading</p>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool
};

export default Loading;