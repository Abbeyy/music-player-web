import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { isLoggedInSelector } from "../../redux/selectors/auth";
import NavigationMenu from "../components/navigation/NavigationMenu";
import { useEffect } from "react";
import { setupForLoggingIn } from "../../thunk/setupForLoggingIn";

export const BaseLayout = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  useEffect(() => {
    dispatch(setupForLoggingIn());
  }, []);

  if (!isLoggedIn && !location?.hash.includes("access_token"))
    return <Navigate to="/login" replace />;

  if (location.pathname === "/" || location.pathname === "")
    return <Navigate to={{ pathname: "discover" }} />;

  return (
    <div className="flex flex-row w-[100vw] h-[100vh] overflow-hidden">
      <NavigationMenu />
      <div className="flex py-[3rem] px-4 w-full h-full items-center justify-center flex-col gap-y-4 bg-[#241623]">
        <Outlet />
      </div>
    </div>
  );
};
