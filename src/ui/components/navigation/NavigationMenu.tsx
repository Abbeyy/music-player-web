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
    <div className="flex flex-col items-center justify-evenly gap-[4rem] py-[4rem] bg-[#4E2C4D] w-[250px] h-[100vh]">
      <button
        className="flex h-[70px] w-[70px] rounded-full justify-center items-center hover:bg-[#9E829C] hover:border-[2px] hover:border-[#C6A3C3]"
        onClick={logout}
      >
        <IoLogOut
          size={28}
          color={active === ActiveItem.discover ? "white" : "#F0EFF4"}
        />
      </button>

      <hr />

      <Link
        className={`flex h-[70px] w-[70px] rounded-full justify-center items-center ${
          active === ActiveItem.discover
            ? "bg-[#9E829C] border-[2px] border-[#C6A3C3]"
            : "hover:bg-[#9E829C] hover:border-[2px] hover:border-[#C6A3C3]"
        }`}
        to="/discover"
      >
        <IoHome
          size={24}
          color={active === ActiveItem.discover ? "white" : "#F0EFF4"}
        />
      </Link>
      <Link
        className={`flex h-[70px] w-[70px] rounded-full justify-center items-center ${
          active === ActiveItem.Me
            ? "bg-[#9E829C] border-[2px] border-[#C6A3C3]"
            : "hover:bg-[#9E829C] hover:border-[2px] hover:border-[#C6A3C3]"
        }`}
        to="/me"
      >
        <RxAvatar
          size={24}
          color={active === ActiveItem.discover ? "white" : "#F0EFF4"}
        />
      </Link>
    </div>
  );
};

export default NavigationBar;
