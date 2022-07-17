import { useAppDispatch } from "../../../hooks";
import { logUserOut } from "../../../thunk/logUserOut";

import styles from "./Auth.module.css";

const LogOut = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logUserOut());
  };

  return (
    <button className={styles["LogButton"]} onClick={logout}>
      Log Out
    </button>
  );
};

export default LogOut;
