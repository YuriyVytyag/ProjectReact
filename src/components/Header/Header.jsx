import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import s from '../Header/Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
