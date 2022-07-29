import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { takeUserToExternalAuthentication } from "../../../thunk/logUserIn";
import { setupForLoggingIn } from "../../../thunk/setupForLoggingIn";

import styles from "./Auth.module.css";

const LogIn = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setupForLoggingIn());
  }, []);

  const handleLogin = () => {
    dispatch(takeUserToExternalAuthentication());
  };

  return (
    <div className={styles["LogButtonWrapper"]}>
      <button className={styles["LogButton"]} onClick={handleLogin}>
        Log Into Spotify
      </button>
    </div>
  );
};

export default LogIn;
