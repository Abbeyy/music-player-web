import { useAppSelector } from "../../../../hooks";
import { isLoggedInSelector } from "../../../../redux/selectors/auth";
import ArtistsSearch from "./ArtistsSearch";

import styles from "./Artists.module.css";
import { artistsSelector } from "../../../../redux/selectors/search";

const ArtistsExplore = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const artists = useAppSelector(artistsSelector);

  return (
    <div className={styles["Panel"]}>
      <div>Artists Explore</div>
      {isLoggedIn ? <ArtistsSearch /> : null}
      <p>{artists.map((artist) => artist.name + "; ")}</p>
    </div>
  );
};

export default ArtistsExplore;
