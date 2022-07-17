import { useAppSelector } from "../../../hooks";
import { currentUserNameSelector } from "../../../redux/selectors/auth";
import styles from "./WelcomeHome.module.css";

const WelcomeHome = () => {
  const name = useAppSelector(currentUserNameSelector);

  return (
    <div className={styles["WelcomeHome"]}>
      <h1>{`Welcome Home ${name ?? ""}`}</h1>
    </div>
  );
};

export default WelcomeHome;
