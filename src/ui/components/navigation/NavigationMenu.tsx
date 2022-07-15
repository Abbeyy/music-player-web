import { Link } from "react-router-dom";
import styles from "./NavigationMenu.module.css";

const NavigationBar = () => (
  <div className={styles["Sidebar"]}>
    <h1 className={styles["Title"]}>My Player</h1>
    <div className={styles["Menu"]}>
      <Link className={styles["Link"]} to="/">
        Welcome
      </Link>
    </div>
  </div>
);

export default NavigationBar;
