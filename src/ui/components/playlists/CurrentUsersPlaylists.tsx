import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { currentUsersPlaylists } from "../../../redux/selectors/playlist";
import { getCurrentUsersPlaylists } from "../../../thunk/current-user/getCurrentUsersPlaylists";
import styles from "./Playlist.module.css";
import { PlaylistPreview } from "./PlaylistPreview";

const CurrentUsersPlaylists = () => {
  const dispatch = useAppDispatch();

  const allPlaylists = useAppSelector(currentUsersPlaylists);

  const lessPlaylists =
    allPlaylists && allPlaylists.length > 4
      ? allPlaylists.slice(0, 4)
      : undefined;

  const [showMorePlaylists, setShowMorePlaylists] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUsersPlaylists());
  }, []);

  const playlistPreviewsShowMore = () =>
    allPlaylists?.length
      ? allPlaylists.map((playlist) => <PlaylistPreview playlist={playlist} />)
      : null;

  const playlistPreviewsShowLess = () =>
    lessPlaylists?.length
      ? lessPlaylists.map((playlist) => <PlaylistPreview playlist={playlist} />)
      : null;

  const handleShowHide = () => setShowMorePlaylists((prevState) => !prevState);

  return (
    <>
      <p className={styles["Title"]}>Public Playlists</p>

      <button className={styles["ShowHide"]} onClick={handleShowHide}>
        {showMorePlaylists ? "Show Less" : "Show More"}
      </button>

      <div className={styles["PlaylistPanel"]}>
        {showMorePlaylists
          ? playlistPreviewsShowMore()
          : playlistPreviewsShowLess()}
      </div>
    </>
  );
};

export default CurrentUsersPlaylists;
