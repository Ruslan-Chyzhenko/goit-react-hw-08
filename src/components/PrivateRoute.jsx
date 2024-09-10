import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { memo } from "react";

const PrivateRoute = memo(({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? element : <Navigate to={redirectTo} />;
});

export default PrivateRoute;
