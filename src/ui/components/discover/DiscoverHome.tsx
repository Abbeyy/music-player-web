import { useAppSelector } from "../../../hooks";
import { currentUserNameSelector } from "../../../redux/selectors/auth";
import styles from "./DiscoverHome.module.css";

const SIGN_UP_URL = "https://www.spotify.com/uk/signup";

const DiscoverHome = () => {
  const name = useAppSelector(currentUserNameSelector);

  return (
    <div className={styles["ContentWrapper"]}>
      <div className={styles["DiscoverHome"]}>
        <h1 className={styles["DiscoverTitle"]}>
          {!!name ? `Discover Home, ${name}` : "Are you new here?"}
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
    </div>
  );
};

export default DiscoverHome;
