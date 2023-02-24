import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

function Navigation() {
  const token = useSelector(state => state.auth.token);

  return (
    <>
      {!token ? (
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? s.active : s.NavLink)}
            >
              LOG IN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/registration"
              className={({ isActive }) => (isActive ? s.active : s.NavLink)}
            >
              REGISTRATION
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className={s.listBox}>
          <li className={s.item}>
            <NavLink
              to="/diary"
              className={({ isActive }) => (isActive ? s.active : s.NavLink)}
            >
              DIARY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className={({ isActive }) => (isActive ? s.active : s.NavLink)}
            >
              CALCULATOR
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navigation;
