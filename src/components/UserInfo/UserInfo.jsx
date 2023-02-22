import React from 'react';
import s from '../UserInfo/UserInfo.module.css';

function UserInfo() {
  return (
    <div className={s.infoBlock}>
      <b>Name</b>
      <button className={s.btnExit} type="button">
        Exit
      </button>
    </div>
  );
}

export default UserInfo;
