import { useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import { tracksSelector } from "../../../redux/selectors/search";
import DiscoverSearch from "../discover/DiscoverSearch";
import TrackPreview from "./TrackPreview";
import styles from "./Tracks.module.css";

const TracksExplore = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const tracks = useAppSelector(tracksSelector);

  const trackPreviews = tracks.map((currentTrack) => (
    <TrackPreview track={currentTrack} />
  ));

  return (
    <div className={styles["ContentWrapper"]}>
      <div className={styles["Panel"]}>
        <div className={styles["Row"]}>
          <div className={styles["PanelElement"]}>Tracks Explore</div>
          {isLoggedIn ? <DiscoverSearch item="tracks" /> : null}
        </div>
      </div>

      {tracks.length ? (
        <div className={styles["TrackResults"]}>{trackPreviews}</div>
      ) : null}
    </div>
  );
};

export default TracksExplore;
