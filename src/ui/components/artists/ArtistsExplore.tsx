import { useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";

import styles from "./Artists.module.css";
import { artistsSelector } from "../../../redux/selectors/search";
import { ArtistPreview } from "./ArtistPreview";
import ExploreSearch from "../welcome/ExploreSearch";

const ArtistsExplore = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const artists = useAppSelector(artistsSelector);

  const artistPreviews = artists.map((currentArtist) => (
    <ArtistPreview artist={currentArtist} />
  ));

  return (
    <div className={styles["ContentWrapper"]}>
      <div className={styles["Panel"]}>
        <div className={styles["Row"]}>
          <div className={styles["PanelElement"]}>Explore Artists</div>
          {isLoggedIn ? <ExploreSearch item="artists" /> : null}
        </div>
      </div>

      {artists.length ? (
        <div className={styles["ArtistResults"]}>{artistPreviews}</div>
      ) : null}
    </div>
  );
};

export default ArtistsExplore;
