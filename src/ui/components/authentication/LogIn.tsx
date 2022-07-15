import { useEffect } from "react";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "../../../constants/auth";
import { useAppDispatch } from "../../../hooks";
import { setToken } from "../../../redux/reducers/authSlice";

import styles from "./Auth.module.css";

const LogIn = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      const hashExtracted = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"));

      token = hashExtracted?.split("=")[1] ?? null;

      if (token) {
        window.location.hash = "";
        window.localStorage.setItem("token", token);
      } else {
        console.warn("Error when extracting token.");
        return;
      }
    }

    if (token) {
      dispatch(setToken(token));
    }
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
