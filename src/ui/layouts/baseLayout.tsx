import { Outlet, useLocation } from "react-router-dom";
import NavigationMenu from "../components/navigation/NavigationMenu";
import { AnythingElse } from "./anythingElse";

export const BaseLayout = () => {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "")
    return <AnythingElse />;

  return (
    <div className="flex flex-col-reverse md:flex-row w-[100vw] h-[100vh] overflow-hidden">
      <NavigationMenu />
      <div
        className={`flex overflow-y-scroll md:overflow-auto w-full h-full items-center justify-center flex-col gap-y-4 bg-gray-100 ${
          location.pathname === "/not-found" ? "" : "p-[2rem]"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};
