import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setTopic } from "../../../redux/reducers/welcomeSlice";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import { Topic } from "../../../types/redux/state/welcome";

import styles from "./WelcomeMenu.module.css";

const WelcomeMenu = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const changeTopic = (newTopic: Topic) => {
    dispatch(setTopic(newTopic));
  };

  const changeToHome = () => {
    changeTopic(Topic.HOME);
  };

  const changeToAlbums = () => {
    changeTopic(Topic.ALBUMS);
  };

  const changeToArtists = () => {
    changeTopic(Topic.ARTISTS);
  };

  const changeToTracks = () => {
    changeTopic(Topic.TRACKS);
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <ul>
      <button className={styles["Option"]} onClick={changeToHome}>
        Home
      </button>
      <button className={styles["Option"]} onClick={changeToArtists}>
        Artists
      </button>
      <button className={styles["Option"]} onClick={changeToTracks}>
        Tracks
      </button>
      <button className={styles["Option"]} onClick={changeToAlbums}>
        Albums
      </button>
    </ul>
  );
};

export default WelcomeMenu;
