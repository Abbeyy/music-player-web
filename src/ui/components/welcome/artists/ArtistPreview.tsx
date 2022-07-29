import { Artist } from "../../../../types/artist";

import styles from "./Artists.module.css";

type Props = {
  artist: Artist;
};

const size = 180;

export const ArtistPreview = (props: Props) => {
  const { artist } = props;
  const { name, popularity, genres, followers, images } = artist;

  const pp = images[0];

  const genresFormatted = genres.join(", ");

  return (
    <div className={styles["ArtistPreview"]}>
      <img
        src={pp.url}
        style={{
          width: size,
          height: undefined,
          aspectRatio: "auto",
          borderRadius: 100,
        }}
        alt="Artist"
      />
      <p className={styles["ArtistName"]}>{name}</p>
      <p className={styles["ArtistInfo"]}>{`${popularity} popularity score`}</p>
      <p className={styles["ArtistInfo"]}>{`${followers.total} followers`}</p>
      <p className={styles["ArtistInfo"]}>{genresFormatted}</p>
    </div>
  );
};
