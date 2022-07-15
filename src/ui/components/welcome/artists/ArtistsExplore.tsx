import { useAppSelector } from "../../../../hooks";
import { isLoggedInSelector } from "../../../../redux/selectors/auth";
import ArtistsSearch from "./ArtistsSearch";

import styles from "./Artists.module.css";

const ArtistsExplore = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  return (
    <div className={styles["Panel"]}>
      <div>Artists Explore</div>
      {isLoggedIn ? <ArtistsSearch /> : null}
    </div>
  );
};

export default ArtistsExplore;
