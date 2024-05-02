import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { isLoggedInSelector } from "../../redux/selectors/auth";
import NavigationMenu from "../components/navigation/NavigationMenu";

export const BaseLayout = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  if (!isLoggedIn) navigate("/login");

  return (
    <>
      <NavigationMenu />
      <Outlet />
    </>
  );
};
