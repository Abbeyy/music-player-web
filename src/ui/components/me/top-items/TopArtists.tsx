import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { topArtistsSelector } from "../../../../redux/selectors/topItems";
import { getUsersTopArtists } from "../../../../thunk/current-user/top-items/getUsersTopArtists";
import { ArtistPreview } from "../../artists/ArtistPreview";
import TrackPreview from "../../tracks/TrackPreview";
import styles from "./TopItems.module.css";

const TopArtists = () => {
  const dispatch = useAppDispatch();

  const allArtists = useAppSelector(topArtistsSelector);

  const lessArtists =
    allArtists && allArtists.length > 4 ? allArtists.slice(0, 4) : undefined;

  const [showMoreArtists, setShowMoreArtists] = useState(false);

  useEffect(() => {
    dispatch(getUsersTopArtists());
  }, []);

  const artistPreviewsShowMore = () =>
    allArtists?.length
      ? allArtists.map((topArtist) => <ArtistPreview artist={topArtist} />)
      : null;

  const artistPreviewsShowLess = () =>
    lessArtists?.length
      ? lessArtists.map((topArtist) => <ArtistPreview artist={topArtist} />)
      : null;

  const handleShowHide = () => setShowMoreArtists((prevState) => !prevState);

  return (
    <>
      <p className={styles["Title"]}>Top Artists This Month</p>
      <p className={styles["Info"]}>Only visible to you</p>

      <button className={styles["ShowHide"]} onClick={handleShowHide}>
        {showMoreArtists ? "Show Less" : "Show More"}
      </button>

      <div className={styles["TrackPanel"]}>
        {showMoreArtists ? artistPreviewsShowMore() : artistPreviewsShowLess()}
      </div>
    </>
  );
};

export default TopArtists;
