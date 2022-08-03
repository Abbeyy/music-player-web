import { Track } from "../../../types/track";
import styles from "./Tracks.module.css";

type Props = {
  track: Track;
};

const TrackPreview = (props: Props) => {
  const { track } = props;

  const { name, explicit, artists, popularity } = track;

  const artistsFormatted = artists.map((artist) => artist.name).join(", ");

  return (
    <div className={styles["TrackPreview"]}>
      <div className={styles["TrackNameWrapper"]}>
        <p className={styles["TrackName"]}>{name}</p>
      </div>
      {explicit ? <p className={styles["TrackInfo"]}>E</p> : null}
      <p className={styles["TrackInfo"]}>Featuring {artistsFormatted}</p>
      <p className={styles["TrackInfo"]}>{popularity} ♥</p>
    </div>
  );
};

export default TrackPreview;
