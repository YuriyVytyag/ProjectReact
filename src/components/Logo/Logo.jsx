import React from 'react';
import logo_480 from '../../images/logo/logo_480.png';
import logo_768 from '../../images/logo/logo_768.png';
import logo_1280 from '../../images/logo/logo_1280.png';
import s from '../Logo/Logo.module.css';

function Logo() {
  return (
    <div className={s.logoWrapper}>
      <img className={s.logo_480} src={logo_480} alt="logo" />
      <img className={s.logo_768} src={logo_768} alt="logo" />
      <div className={s.logoLine}>
        <img className={s.logo_1280} src={logo_1280} alt="logo" />
      </div>
    </div>
  );
}

export default Logo;
