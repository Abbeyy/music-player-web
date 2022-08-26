import { Album } from "../../../../types/album";
import { AlbumPreview } from "../../albums/AlbumPreview";
import styles from "./ArtistAlbums.module.css";

type Props = {
  albums: { [key: string]: Album[] };
};

export const ArtistsAlbums = (props: Props) => {
  const { albums } = props;

  const content: JSX.Element[] = [];
  Object.entries(albums).forEach((entry) => {
    const [type, albums] = entry;
    content.push(
      <>
        <h3 className={styles["Info"]}>{`${type}S`}</h3>
        <div className={styles["AlbumPanel"]}>
          {albums?.map((album) => (
            <AlbumPreview album={album as Album} />
          ))}
        </div>
      </>
    );
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
