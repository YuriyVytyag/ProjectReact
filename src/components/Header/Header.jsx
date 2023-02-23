import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from '../Header/Header.module.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Header() {
  // const token = .... необхідно додати!!!!!!!!
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
    <header className={s.header}>
      <Logo />
      <div className={s.Navigation}>
        <Navigation />
      </div>

      <div className={s.UserInfo}>
        <UserInfo />
      </div>
      <div className={s.burger}>
        <button className={s.btn} onClick={handleClick}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        {isOpen && (
          <div className={s.mobileMenu}>
            <NavLink className={s.mobileLink}>Diary</NavLink>
            <NavLink className={s.mobileLink}>Calculator</NavLink>
          </div>
        )}
      </div>
    </header>
    <Outlet/>
    </div>
  );
}

export default Header;
