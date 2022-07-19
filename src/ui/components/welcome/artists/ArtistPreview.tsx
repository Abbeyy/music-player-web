import { Artist } from "../../../../types/artist";

import styles from "./Artists.module.css";

type Props = {
  artist: Artist;
};

export const ArtistPreview = (props: Props) => {
  const { artist } = props;
  const { name, popularity, genres, followers } = artist;

  const genresFormatted = genres.join(", ");

  return (
    <div className={styles["ArtistPreview"]}>
      <p>{name}</p>
      <p>{`${popularity} popularity score`}</p>
      <p>{`${followers.total} followers`}</p>
      <p>{genresFormatted}</p>
    </div>
  );
};
