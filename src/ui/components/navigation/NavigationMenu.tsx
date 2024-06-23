import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { useAppDispatch } from "../../../hooks";
import { logUserOut } from "../../../thunk/logUserOut";
import { RxAvatar } from "react-icons/rx";

enum ActiveItem {
  discover = "discover",
  Me = "Me",
}

const NavigationBar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logUserOut());
    navigate("/login");
  };

  let active: ActiveItem | null = null;
  if (location.pathname === "/discover") active = ActiveItem.discover;
  else if (location.pathname === "/me") active = ActiveItem.Me;

  return (
    <div className="flex flex-row md:flex-col border-t-[0.5px] md:border-t-0 md:border-r-[0.5px] border-[#b5a8b4] items-center justify-between px-[1rem] md:py-[4rem] bg-feldgrau w-[100vw] min-h-[70px] md:min-w-[150px] md:w-[150px] md:h-[100vh]">
      <button
        className="flex flex-row items-center gap-x-2 px-3 py-2 rounded-[8px] hover:bg-feldgrauHover"
        onClick={logout}
      >
        <IoLogOut size={28} color="white" />
        <p className="text-white text-xs font-semibold text-nowrap">LOG OUT</p>
      </button>

      <div className="flex flex-row md:flex-col gap-6 justify-evenly items-start">
        <Link
          className={`flex flex-row items-center gap-x-2 px-3 py-2 rounded-[8px] ${
            active === ActiveItem.discover
              ? "bg-smoky hover:bg-smokyHover"
              : "hover:bg-feldgrauHover"
          }`}
          to={{ pathname: "discover", hash: location.hash }}
        >
          <IoHome size={24} color="white" />
          <p className="text-white text-xs font-semibold">DISCOVER</p>
        </Link>

        <Link
          className={`flex flex-row items-center gap-x-2 px-3 py-2 rounded-[8px] ${
            active === ActiveItem.Me
              ? "bg-smoky hover:bg-smokyHover"
              : "hover:bg-feldgrauHover"
          }`}
          to={{ pathname: "me", hash: location.hash }}
        >
          <RxAvatar size={24} color="white" />
          <p className="text-white text-xs font-semibold">ME</p>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
