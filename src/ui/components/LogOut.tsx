import { useAppDispatch } from "../../hooks";
import { setToken } from "../../redux/reducers/authSlice";

const LogOut = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(setToken(null));
  };

  return <button onClick={logout}>Log Out</button>;
};

export default LogOut;
