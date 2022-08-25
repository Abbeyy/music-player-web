import { useAppDispatch, useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";

import styles from "./Artists.module.css";
import { artistsSelector } from "../../../redux/selectors/search";
import { ArtistPreview } from "./ArtistPreview";
import ExploreSearch from "../welcome/ExploreSearch";
import { artistSelector } from "../../../redux/selectors/artist";
import { setArtist } from "../../../redux/reducers/artistSlice";
import { ArtistProfile } from "./ArtistProfile";

const ArtistsExplore = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const artists = useAppSelector(artistsSelector);
  const artist = useAppSelector(artistSelector);

  const dispatch = useAppDispatch();

  const showArtistProfile = !!artist;

  const artistPreviews = artists.map((currentArtist) => (
    <ArtistPreview artist={currentArtist} />
  ));

  const handleBackFromProfile = () => {
    dispatch(setArtist(null));
  };

  if (showArtistProfile && isLoggedIn) {
    return <ArtistProfile artist={artist} back={handleBackFromProfile} />;
  }

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
