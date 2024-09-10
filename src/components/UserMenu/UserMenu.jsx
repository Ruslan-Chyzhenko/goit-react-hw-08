// logout - для виходу з додатка. Базовий тип екшену "auth/logout".
// Використовується у компоненті UserMenu у шапці додатку.

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user}!</p>
      <button className={css.logoutButton} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
