import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import s from '../Navigation/Navigation.module.css';

function Navigation() {
  const token = useSelector(selectToken);

  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to={token ? '/diary' : '/login'}
            className={({ isActive }) => (isActive ? s.active : s.NavLink)}
          >
            {token ? 'DIARY' : 'LOG IN'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={token ? '/calculator' : '/registration'}
            className={({ isActive }) => (isActive ? s.active : s.NavLink)}
          >
            {token ? 'CALCULATOR' : 'REGISTRATION'}
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
