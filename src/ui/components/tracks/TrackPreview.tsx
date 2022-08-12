import ReactPlayer from "react-player";
import { Track } from "../../../types/track";
import styles from "./Tracks.module.css";

type Props = {
  track: Track;
};

const size = 180;

const TrackPreview = (props: Props) => {
  const { track } = props;

  const {
    name,
    explicit,
    artists,
    popularity,
    preview_url,
    album,
    is_playable,
  } = track;

  const pp = album.images[0];

  const artistsFormatted = artists.map((artist) => artist.name).join(", ");

  return (
    <div className={styles["TrackPreview"]}>
      {pp.url && is_playable ? (
        <ReactPlayer
          light={pp.url || true}
          playing={false}
          muted={false}
          url={preview_url}
          width={180}
          height={180}
        />
      ) : (
        <img
          src={pp.url}
          style={{
            width: size,
            height: size,
            objectFit: "cover",
            objectPosition: "100% 0%",
            aspectRatio: "auto",
            borderRadius: 100,
          }}
          alt="Album"
        />
      )}
      <div className={styles["TrackNameWrapper"]}>
        <p className={styles["TrackName"]}>{name}</p>
      </div>
      {explicit ? <p className={styles["TrackRating"]}>E</p> : null}
      <p className={styles["TrackInfo"]}>Featuring {artistsFormatted}</p>
      <p className={styles["TrackInfo"]}>{popularity} ♥</p>
    </div>
  );
};

export default TrackPreview;
