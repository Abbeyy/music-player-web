import { useAppSelector } from "../../../hooks";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import { topicSelector } from "../../../redux/selectors/welcome";
import { Topic } from "../../../types/redux/state/welcome";
import LogIn from "../authentication/LogIn";
import LogOut from "../authentication/LogOut";
import WelcomeMenu from "../navigation/WelcomeMenu";
import AlbumsExplore from "./albums/AlbumsExplore";
import ArtistsExplore from "./artists/ArtistsExplore";
import TracksExplore from "./tracks/TracksExplore";

import styles from "./Welcome.module.css";
import WelcomeHome from "./WelcomeHome";

const Welcome = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const currentTopic = useAppSelector(topicSelector);

  let content: JSX.Element | undefined = undefined;

  switch (currentTopic) {
    case Topic.ALBUMS:
      content = <AlbumsExplore />;
      break;

    case Topic.ARTISTS:
      content = <ArtistsExplore />;
      break;

    case Topic.TRACKS:
      content = <TracksExplore />;
      break;

    case Topic.HOME:
    default:
      content = <WelcomeHome />;
      break;
  }

  return (
    <div className={styles["Welcome"]}>
      {isLoggedIn ? <LogOut /> : <LogIn />}
      <WelcomeMenu />
      <div className={styles["ContentWrapper"]}>{content}</div>
    </div>
  );
};

export default Welcome;
