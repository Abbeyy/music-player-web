import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { isLoggedInSelector } from "../../redux/selectors/auth";
import NavigationMenu from "../components/navigation/NavigationMenu";

export const BaseLayout = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const location = useLocation();

  if (!isLoggedIn) return <Navigate to="/login" />;

  if (location.pathname === "/" || location.pathname === "")
    <Navigate to="/discover" />;

  return (
    <div className="flex flex-row w-[100vw] h-[100vh]">
      <NavigationMenu />
      <Outlet />
    </div>
  );
};
