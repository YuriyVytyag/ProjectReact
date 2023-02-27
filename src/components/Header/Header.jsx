import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import s from '../Header/Header.module.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';

function Header() {
  const isAuth = useSelector(state => state.auth.isAuth);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  function handleClick() {
    setIsOpen(!isOpen);
  }
  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };
  const handleOutsideClick = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // document.body.style.overflow = 'auto'; // додаємо стиль
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      // document.body.style.overflow = 'auto'; // видаляємо стиль
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={s.header}>
      <Link className={s.leftBlock} to={isAuth ? '/diary' : '/'}>
        <Logo />
      </Link>

      <div className={`${s.Navigation} ${s.rightBlock}`}>
        <Navigation />
      </div>

      <div className={s.UserInfo}>{isAuth && <UserInfo />}</div>

      {isAuth && (
        <div onKeyDown={handleKeyDown} tabIndex={0} className={s.burger}>
          <button className={s.btn} onClick={handleClick}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          {isOpen && (
            <div className={s.mobileMenu} ref={menuRef}>
              <NavLink
                to="/diary"
                className={({ isActive }) =>
                  isActive ? s.activeLink : s.mobileLink
                }
                onClick={() => {
                  closeMenu();
                  navigate('/diary');
                }}
              >
                Diary
              </NavLink>
              <NavLink
                to="/calculator"
                className={({ isActive }) =>
                  isActive ? s.activeLink : s.mobileLink
                }
                onClick={() => {
                  closeMenu();
                  navigate('/calculator');
                }}
              >
                Calculator
              </NavLink>
            </div>
          )}
          {isOpen && (
            <div className={s.backdrop} onClick={handleOutsideClick}></div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
