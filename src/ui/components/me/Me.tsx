import { useAppSelector } from "../../../hooks";
import { currentUserSelector } from "../../../redux/selectors/auth";
import styles from "./Me.module.css";

const size = 250;

const Me = () => {
  const user = useAppSelector(currentUserSelector);
  const pp = user?.images[0];

  return (
    <div className={styles["Me"]}>
      <div className={styles["Panel"]}>
        <img
          src={pp?.url}
          style={{
            width: size,
            height: undefined,
            aspectRatio: "auto",
            borderRadius: 150,
            padding: 30,
          }}
          alt="Artist"
        />
        <div className={styles["Info"]}>
          <p className={styles["Detail"]}>PROFILE</p>
          <p className={styles["Name"]}>{user?.display_name}</p>
          {user?.followers ? (
            <p
              className={styles["Detail"]}
            >{`${user?.followers.total} Followers`}</p>
          ) : null}
          <p className={styles["Detail"]}>{user?.country}</p>
        </div>
      </div>

      <div className={styles["Music"]}>
        <p className={styles["Title"]}>Top Artists This Month</p>
        <p className={styles["Title"]}>Top Tracks This Month</p>
        <p className={styles["Title"]}>Public Playlists</p>
      </div>
    </div>
  );
};

export default Me;
