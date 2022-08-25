import { useAppDispatch } from "../../../hooks";
import { getArtistById } from "../../../thunk/artists/getArtist";
import { Artist } from "../../../types/artist";

import styles from "./Artists.module.css";

type Props = {
  artist: Artist;
};

const size = 180;

export const ArtistPreview = (props: Props) => {
  const { artist } = props;
  const { id, name, popularity, genres, followers, images } = artist;

  const dispatch = useAppDispatch();

  const pp = images[0];

  const genresFormatted = genres.join(", ");

  const getArtist = () => {
    dispatch(getArtistById(id));
  };

  return (
    <div className={styles["ArtistPreview"]} onClick={getArtist}>
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
        alt="Artist"
      />
      <div className={styles["ArtistNameWrapper"]}>
        <p className={styles["ArtistName"]}>{name}</p>
      </div>
      <p className={styles["ArtistInfo"]}>{`${popularity} popularity score`}</p>
      <p className={styles["ArtistInfo"]}>{`${followers.total} followers`}</p>
      <p className={styles["ArtistInfo"]}>{genresFormatted}</p>
    </div>
  );
};
