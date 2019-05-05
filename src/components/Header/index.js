import React from 'react';
import logo from '../../images/logo.svg';

import './styles.scss';

const Header = () => (
  <div className="header__wrapper">
    <div className="container">
      <div className="header__title">
        <img src={logo} />
      </div>
    </div>
  </div>
);
export default Header;
