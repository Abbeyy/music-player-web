import { useAppDispatch } from "../../../hooks";
import { logUserOut } from "../../../thunk/logUserOut";

const LogOut = () => {
  const dispatch = useAppDispatch();

  const logout = () => dispatch(logUserOut());

  return (
    <button className="" onClick={logout}>
      Log Out
    </button>
  );
};

export default LogOut;
