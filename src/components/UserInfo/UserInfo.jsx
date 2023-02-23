import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../UserInfo/UserInfo.module.css';
import { logout } from '../../redux/auth/auth-operations';

function UserInfo() {
  const name = useSelector(state => state?.user?.username);
  const dispatch = useDispatch();

  return (
    <div className={s.infoBlock}>
      <b>{name}</b>
      <button
        className={s.btnExit}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Exit
      </button>
    </div>
  );
}

export default UserInfo;
