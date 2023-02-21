import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from '../Header/Header.module.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

function Header() {
  const token = useSelector(selectToken);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={s.header}>
      <Link to={token ? '/diary' : '/'}>
        <Logo />
      </Link>

      <div className={s.Navigation}>
        <Navigation />
      </div>

      <div className={s.UserInfo}>{token && <UserInfo />}</div>

      {token && (
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
      )}
    </header>
  );
}

export default Header;
