// logout - для виходу з додатка. Базовий тип екшену "auth/logout".
// Використовується у компоненті UserMenu у шапці додатку.

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {name}!</p>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};

export default UserMenu;
