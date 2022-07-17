import { useEffect } from "react";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "../../../constants/auth";
import { useAppDispatch } from "../../../hooks";
import { logUserIn } from "../../../thunk/logUserIn";

import styles from "./Auth.module.css";

const LogIn = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logUserIn());
  }, []);

  return (
    <a
      className={styles["LogButton"]}
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
    >
      Log Into Spotify
    </a>
  );
};

export default LogIn;
