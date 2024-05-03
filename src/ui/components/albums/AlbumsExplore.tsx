import { useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import styles from "./Albums.module.css";
import { AlbumPreview } from "./AlbumPreview";
import { albumsSelector } from "../../../redux/selectors/search";
import DiscoverSearch from "../discover/DiscoverSearch";

const AlbumsExplore = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const albums = useAppSelector(albumsSelector);

  const artistPreviews = albums.map((currentAlbum) => (
    <AlbumPreview album={currentAlbum} />
  ));

  return (
    <div className={styles["ContentWrapper"]}>
      <div className={styles["Panel"]}>
        <div className={styles["Row"]}>
          <div className={styles["PanelElement"]}>Explore Albums</div>
          {isLoggedIn ? <DiscoverSearch item="albums" /> : null}
        </div>
      </div>

      {albums.length ? (
        <div className={styles["AlbumResults"]}>{artistPreviews}</div>
      ) : null}
    </div>
  );
};

export default AlbumsExplore;
