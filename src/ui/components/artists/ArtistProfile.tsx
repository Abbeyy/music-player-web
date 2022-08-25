import { Artist } from "../../../types/artist";
import styles from "./ArtistProfile.module.css";

type Props = {
  artist: Artist;
  back: () => void;
};

const size = 250;

export const ArtistProfile = (props: Props) => {
  const { artist, back } = props;
  const { images, name, followers, genres, popularity, type } = artist;

  const pp = images[0];

  const genresFormatted = genres.join(", ");

  return (
    <div className={styles["ArtistWrapper"]}>
      <div className={styles["Back"]} onClick={back}>
        <p className={styles["BackText"]}>Back</p>
      </div>
      <div className={styles["Artist"]}>
        <div className={styles["Panel"]}>
          <img
            src={pp?.url}
            style={{
              width: size,
              height: size,
              objectFit: "cover",
              objectPosition: "100% 0%",
              aspectRatio: "auto",
              borderRadius: 150,
              margin: 30,
              marginLeft: 0,
            }}
            alt="Artist"
          />
          <div className={styles["Info"]}>
            <p className={styles["DetailCapitalize"]}>{type}</p>
            <p className={styles["Name"]}>{name}</p>
            {followers ? (
              <p
                className={styles["Detail"]}
              >{`${followers.total} Followers`}</p>
            ) : null}
            <p className={styles["Detail"]}>{popularity} ♥</p>
            <p>
              className={styles["Detail-Wrapped"]}
              {genresFormatted}
            </p>
          </div>
        </div>

        <div className={styles["Section"]}>
          <p>Play</p>
          <p>Follow Btn</p>
          <p>...</p>
        </div>

        <div className={styles["Section"]}>
          <p>Popular (...tracks)</p>
        </div>

        <div>
          <p>Under construction!</p>
        </div>
      </div>
    </div>
  );
};
