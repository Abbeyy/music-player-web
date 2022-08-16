import { useAppSelector } from "../../../hooks";
import { topicSelector } from "../../../redux/selectors/welcome";

import WelcomeMenu from "./WelcomeMenu";
import AlbumsExplore from "../albums/AlbumsExplore";
import ArtistsExplore from "../artists/ArtistsExplore";
import TracksExplore from "../tracks/TracksExplore";

import styles from "./Welcome.module.css";
import WelcomeHome from "./WelcomeHome";
import { TOPIC } from "../../../types";

const Welcome = () => {
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
      content = <WelcomeHome />;
      break;
  }

  return (
    <div className={styles["WelcomeWrapper"]}>
      <div className={styles["Welcome"]}>
        <WelcomeMenu />
        <div className={styles["ContentWrapper"]}>{content}</div>
      </div>
    </div>
  );
};

export default Welcome;
