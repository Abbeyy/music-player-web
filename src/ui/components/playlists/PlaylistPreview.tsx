import { Playlist } from "../../../types/playlist";
import styles from "./Playlist.module.css";

type Props = {
  playlist: Playlist;
};

const size = 180;

export const PlaylistPreview = (props: Props) => {
  const { playlist } = props;
  const { collaborative, name, images, followers, tracks } = playlist;

  const pp = images[0];

  return (
    <div className={styles["PlaylistPreview"]}>
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
        alt="Playlist"
      />
      <div className={styles["PlaylistNameWrapper"]}>
        <p className={styles["PlaylistName"]}>{name}</p>
      </div>

      {collaborative ? (
        <p>
          ➼<span className={styles["PlaylistCollab"]}> Collaborate</span>
        </p>
      ) : null}

      {tracks.items?.length ? (
        <p
          className={styles["PlaylistInfo"]}
        >{`${tracks.items?.length} tracks`}</p>
      ) : null}

      {followers?.total ? (
        <p
          className={styles["PlaylistInfo"]}
        >{`${followers?.total} followers`}</p>
      ) : null}
    </div>
  );
};
