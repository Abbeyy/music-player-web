import { Link } from "react-router-dom";
import styles from "./NavigationMenu.module.css";
import LogOut from "../authentication/LogOut";

const NavigationBar = () => {
  return (
    <div className={styles["Menu"]}>
      <Link className={styles["Option"]} to="/welcome">
        Explore
      </Link>
      <Link className={styles["Option"]} to="/me">
        Me
      </Link>
      <LogOut />
    </div>
  );
};

export default NavigationBar;
