// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh".
// Використовується у компоненті App під час його монтування.

import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, NavLink } from "react-router-dom";
import { Loader } from "../Loader";
import clsx from "clsx";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

import Layout from "../Layout";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";

import {
  selectIsRefreshing,
  selectIsLoggedIn,
  selectUser,
} from "../redux/auth/selectors";
import { logOut, refreshUser } from "./redux/auth/operations";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logOut());
  };

  if (isRefreshing) return <p>User is refreshing, please wait</p>;

  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
              <div>
                <p>Hello, {user.name}!</p>
                <p>Email: {user.email}</p>
              </div>
              <button
                type="button"
                className={css.logoutButton}
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    element={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    element={<RegistrationPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    element={<ContactsPage />}
                    redirectTo="/login"
                  />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
