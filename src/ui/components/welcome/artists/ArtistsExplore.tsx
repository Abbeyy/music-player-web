import { useAppSelector } from "../../../../hooks";
import { isLoggedInSelector } from "../../../../redux/selectors/auth";
import ArtistsSearch from "./ArtistsSearch";

import styles from "./Artists.module.css";
import { artistsSelector } from "../../../../redux/selectors/search";
import { ArtistPreview } from "./ArtistPreview";

const ArtistsExplore = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const artists = useAppSelector(artistsSelector);

  const artistPreviews = artists.map((currentArtist) => (
    <ArtistPreview artist={currentArtist} />
  ));

  return (
    <>
      <div className={styles["Panel"]}>
        <div className={styles["Row"]}>
          <div className={styles["PanelElement"]}>Artists Explore</div>
          {isLoggedIn ? <ArtistsSearch /> : null}
        </div>
      </div>

      {artists.length ? (
        <div className={styles["ArtistResults"]}>{artistPreviews}</div>
      ) : null}
    </>
  );
};

export default ArtistsExplore;
