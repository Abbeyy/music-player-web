import { useState } from "react";
import { Album } from "../../../../types/album";
import { AlbumPreview } from "../../albums/AlbumPreview";
import styles from "./ArtistAlbums.module.css";

type Props = {
  albums: { [key: string]: Album[] };
};

const LIMIT = 4;

export const ArtistsAlbums = (props: Props) => {
  const { albums } = props;

  const [showMore, setShowMore] = useState(() =>
    Object.keys(albums).reduce(
      (acc: { [key: string]: boolean }, type: string) => {
        acc[type] = false;
        return acc;
      },
      {}
    )
  );

  const content: JSX.Element[] = [];
  Object.entries(albums).forEach((entry) => {
    const [type, albumsForType] = entry;
    const albumsAfterLimit = showMore[type]
      ? albumsForType
      : albumsForType.slice(0, LIMIT);

    content.push(
      <>
        <h3 className={styles["Info"]}>{`${type}S`}</h3>
        {albumsForType.length > LIMIT ? (
          <button
            className={styles["ShowHide"]}
            onClick={() => handleShowHide(type)}
          >
            {showMore[type] ? `Show Less ${type}s` : `Show More ${type}s`}
          </button>
        ) : null}
        <div className={styles["AlbumPanel"]}>
          {albumsAfterLimit?.map((currentAlbum) => (
            <AlbumPreview album={currentAlbum as Album} />
          ))}
        </div>
      </>
    );
  });

  const handleShowHide = (albumType: string) =>
    setShowMore((prevState) => {
      const previousValue = prevState[albumType];
      return { ...prevState, [albumType]: !previousValue };
    });

  return (
    <div className={styles["Panel"]}>
      <>
        <h3 className={styles["Title"]}>{`Albums & Singles`}</h3>
        {content}
      </>
    </div>
  );
};
