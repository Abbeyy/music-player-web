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

  const activeStyle = "bg-[#593c57] border-[2px] border-[#9E829C]";
  const hoverStyle =
    "hover:bg-[#593c57] hover:border-[2px] hover:border-[#9E829C]";

  return (
    <div className="flex flex-col border-r-[0.5px] border-[#b5a8b4] items-center justify-between py-[4rem] bg-[#291d28] min-w-[150px] h-[100vh]">
      <button
        className={`flex h-[70px] w-[70px] rounded-full justify-center items-center ${hoverStyle}`}
        onClick={logout}
      >
        <IoLogOut
          size={28}
          color={active === ActiveItem.discover ? "white" : "#F0EFF4"}
        />
      </button>

      <div className="flex flex-col gap-[4rem] justify-evenly items-center">
        <Link
          className={`flex h-[70px] w-[70px] rounded-full justify-center items-center ${
            active === ActiveItem.discover ? activeStyle : hoverStyle
          }`}
          to={{ pathname: "discover", hash: location.hash }}
        >
          <IoHome
            size={24}
            color={active === ActiveItem.discover ? "white" : "#F0EFF4"}
          />
        </Link>
        <Link
          className={`flex h-[70px] w-[70px] rounded-full justify-center items-center ${
            active === ActiveItem.Me ? activeStyle : hoverStyle
          }`}
          to={{ pathname: "me", hash: location.hash }}
        >
          <RxAvatar
            size={24}
            color={active === ActiveItem.discover ? "white" : "#F0EFF4"}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
