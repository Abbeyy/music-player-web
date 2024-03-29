import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { topTracksSelector } from "../../../../redux/selectors/topItems";
import { getUsersTopTracks } from "../../../../thunk/current-user/top-items/getUsersTopTracks";
import TrackPreview from "../../tracks/TrackPreview";
import styles from "./TopItems.module.css";

const TopTracks = () => {
  const dispatch = useAppDispatch();

  const allTracks = useAppSelector(topTracksSelector);

  const lessTracks =
    allTracks && allTracks.length > 4 ? allTracks.slice(0, 4) : undefined;

  const [showMoreTracks, setShowMoreTracks] = useState(false);

  useEffect(() => {
    dispatch(getUsersTopTracks());
  }, []);

  const trackPreviewsShowMore = () =>
    allTracks?.length
      ? allTracks.map((topTrack) => <TrackPreview track={topTrack} />)
      : null;

  const trackPreviewsShowLess = () =>
    lessTracks?.length
      ? lessTracks.map((topTrack) => <TrackPreview track={topTrack} />)
      : null;

  const handleShowHide = () => setShowMoreTracks((prevState) => !prevState);

  return (
    <>
      <p className={styles["Title"]}>Top Tracks This Month</p>
      <p className={styles["Info"]}>Only visible to you</p>

      <button className={styles["ShowHide"]} onClick={handleShowHide}>
        {showMoreTracks ? "Show Less" : "Show More"}
      </button>

      <div className={styles["TrackPanel"]}>
        {showMoreTracks ? trackPreviewsShowMore() : trackPreviewsShowLess()}
      </div>
    </>
  );
};

export default TopTracks;
