import { Album } from "../../../types/album";

import styles from "./Albums.module.css";

type Props = {
  album: Album;
};

const size = 180;

export const AlbumPreview = (props: Props) => {
  const { album } = props;
  const { name, release_date, artists, images } = album;

  const pp = images[0];

  const artistsFormatted = artists.map((artist) => artist.name).join(", ");

  return (
    <div className={styles["AlbumPreview"]}>
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
      <div className={styles["AlbumNameWrapper"]}>
        <p className={styles["AlbumName"]}>{name}</p>
      </div>
      <p className={styles["AlbumInfo"]}>{`${new Date(
        release_date
      ).getFullYear()} • ${artistsFormatted}`}</p>
    </div>
  );
};
