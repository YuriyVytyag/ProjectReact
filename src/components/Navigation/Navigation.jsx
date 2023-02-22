import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

function Navigation() {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.NavLink}>LOG IN</NavLink>
        </li>
        <li>
          <NavLink className={s.NavLink}>REGISTRATION</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
