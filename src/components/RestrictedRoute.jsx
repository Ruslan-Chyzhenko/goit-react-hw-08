import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { memo } from "react";

const RestrictedRoute = memo(({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
});
export default RestrictedRoute;
