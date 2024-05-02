import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setTopic } from "../../../redux/reducers/welcomeSlice";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import { TOPIC } from "../../../types";

import styles from "./WelcomeMenu.module.css";

const WelcomeMenu = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(isLoggedInSelector);

  if (!isLoggedIn) return null;

  const changeTopic = (newTopic: TOPIC) => dispatch(setTopic(newTopic));

  const changeToHome = () => changeTopic(TOPIC.HOME);

  const changeToAlbums = () => changeTopic(TOPIC.ALBUMS);

  const changeToArtists = () => changeTopic(TOPIC.ARTISTS);

  const changeToTracks = () => changeTopic(TOPIC.TRACKS);

  return (
    <ul className={styles["menu"]}>
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
