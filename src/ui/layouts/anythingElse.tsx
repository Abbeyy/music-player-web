import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { isLoggedInSelector } from "../../redux/selectors/auth";

export const AnythingElse = () => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  if (!isLoggedIn && !location?.hash.includes("access_token"))
    return <Navigate to="/login" replace />;

  return <Navigate to={{ pathname: "not-found" }} />;
};
