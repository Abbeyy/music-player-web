import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { topTracksSelector } from "../../../../redux/selectors/topItems";
import { getUsersTopTracks } from "../../../../thunk/getUsersTopTracks";
import TrackPreview from "../../tracks/welcome/TrackPreview";
import styles from "./TopItems.module.css";

const TopTracks = () => {
  const dispatch = useAppDispatch();

  const allTracks = useAppSelector(topTracksSelector);

  const lessTracks =
    allTracks && allTracks.length > 4 ? allTracks.slice(0, 3) : undefined;

  const [showMoreTracks, setShowMoreTracks] = useState(false);

  useEffect(() => {
    dispatch(getUsersTopTracks());
  }, []);

  const trackPreviewsShowMore = () =>
    allTracks
      ? allTracks.map((topTrack) => <TrackPreview track={topTrack} />)
      : null;

  const trackPreviewsShowLess = () =>
    lessTracks
      ? lessTracks.map((topTrack) => <TrackPreview track={topTrack} />)
      : null;

  const handleShowHide = () => setShowMoreTracks((prevState) => !prevState);

  return (
    <>
      <p className={styles["Title"]}>Top Tracks This Month</p>

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
