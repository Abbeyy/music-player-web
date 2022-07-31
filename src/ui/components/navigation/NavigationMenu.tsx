import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import LogIn from "../authentication/LogIn";
import LogOut from "../authentication/LogOut";
import styles from "./NavigationMenu.module.css";

const NavigationBar = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  return (
    <div className={styles["Sidebar"]}>
      <h1 className={styles["Title"]}>My Player</h1>
      {isLoggedIn ? <LogOut /> : <LogIn />}
      <div className={styles["Menu"]}>
        <Link className={styles["Option"]} to="/">
          Explore
        </Link>
        <Link className={styles["Option"]} to="/me">
          Me
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
