import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from 'redux/user/user-selectors';
import s from '../UserInfo/UserInfo.module.css';
import authOperations from '../../redux/auth/auth-operations';

function UserInfo() {
  const name = useSelector(selectUsername);
  const dispatch = useDispatch();

  return (
    <div className={s.infoBlock}>
      <b>{name}</b>
      <button
        className={s.btnExit}
        type="button"
        onClick={() => dispatch(authOperations.logout())}
      >
        Exit
      </button>
    </div>
  );
}

export default UserInfo;
