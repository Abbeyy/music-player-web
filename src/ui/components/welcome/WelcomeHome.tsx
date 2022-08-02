import { useAppSelector } from "../../../hooks";
import { currentUserNameSelector } from "../../../redux/selectors/auth";
import styles from "./WelcomeHome.module.css";

const SIGN_UP_URL = "https://www.spotify.com/uk/signup";

const WelcomeHome = () => {
  const name = useAppSelector(currentUserNameSelector);

  return (
    <div className={styles["WelcomeHome"]}>
      <h1 className={styles["WelcomeTitle"]}>
        {!!name ? `Welcome Home, ${name}` : "Are you new here?"}
      </h1>
      {!name ? (
        <p className={styles["LoginOrSignUp"]}>
          Login on the left or sign up with{" "}
          <a className={styles["SignUp"]} href={SIGN_UP_URL}>
            Spotify
          </a>
          .
        </p>
      ) : null}
    </div>
  );
};

export default WelcomeHome;
