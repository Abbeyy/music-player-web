import { useAppDispatch } from "../../../hooks";
import { logUserOut } from "../../../thunk/logUserOut";

import styles from "./Auth.module.css";

const LogOut = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logUserOut());
  };

  return (
    <div className={styles["LogButtonWrapper"]}>
      <button className={styles["LogButton"]} onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
