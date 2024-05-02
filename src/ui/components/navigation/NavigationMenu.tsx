import { Link } from "react-router-dom";
import styles from "./NavigationMenu.module.css";

const NavigationBar = () => {
  return (
    <div className={styles["Menu"]}>
      <Link className={styles["Option"]} to="/welcome">
        Explore
      </Link>
      <Link className={styles["Option"]} to="/me">
        Me
      </Link>
    </div>
  );
};

export default NavigationBar;
