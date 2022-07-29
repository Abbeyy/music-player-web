import { useAppDispatch, useAppSelector } from "../../../hooks";
import { tokenSelector } from "../../../redux/selectors/auth";
import { takeUserToExternalAuthentication } from "../../../thunk/logUserIn";
import { setupForLoggingIn } from "../../../thunk/setupForLoggingIn";

import styles from "./Auth.module.css";

const LogIn = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector(tokenSelector);

  const handleLogin = () => {
    if (token) {
      dispatch(takeUserToExternalAuthentication());
      dispatch(setupForLoggingIn());
    } else {
      console.log("User has a valid token.");
    }
  };

  return (
    <button className={styles["LogButton"]} onClick={handleLogin}>
      Log Into Spotify
    </button>
  );
};

export default LogIn;
