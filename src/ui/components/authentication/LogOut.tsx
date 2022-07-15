import { useAppDispatch } from "../../../hooks";
import { setToken } from "../../../redux/reducers/authSlice";

import styles from "./Auth.module.css";

const LogOut = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(setToken(null));
  };

  return (
    <button className={styles["LogButton"]} onClick={logout}>
      Log Out
    </button>
  );
};

export default LogOut;
