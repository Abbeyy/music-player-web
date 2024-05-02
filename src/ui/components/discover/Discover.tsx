import { useAppSelector } from "../../../hooks";

import DiscoverMenu from "./DiscoverMenu";
import AlbumsExplore from "../albums/AlbumsExplore";
import ArtistsExplore from "../artists/ArtistsExplore";
import TracksExplore from "../tracks/TracksExplore";

import styles from "./Discover.module.css";
import DiscoverHome from "./DiscoverHome";
import { TOPIC } from "../../../types";
import { topicSelector } from "../../../redux/selectors/discover";

const Discover = () => {
  const currentTopic = useAppSelector(topicSelector);

  let content: JSX.Element | undefined = undefined;

  switch (currentTopic) {
    case TOPIC.ALBUMS:
      content = <AlbumsExplore />;
      break;

    case TOPIC.ARTISTS:
      content = <ArtistsExplore />;
      break;

    case TOPIC.TRACKS:
      content = <TracksExplore />;
      break;

    case TOPIC.HOME:
    default:
      content = <DiscoverHome />;
      break;
  }

  return (
    <div className={styles["DiscoverWrapper"]}>
      <div className={styles["Discover"]}>
        <DiscoverMenu />
        {content}
      </div>
    </div>
  );
};

export default Discover;
