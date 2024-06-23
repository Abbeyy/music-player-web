import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { topTracksSelector } from "../../../../redux/selectors/topItems";
import { getUsersTopTracks } from "../../../../thunk/current-user/top-items/getUsersTopTracks";
import TrackPreview from "../../tracks/TrackPreview";

const TopTracks = () => {
  const dispatch = useAppDispatch();

  const allTracks = useAppSelector(topTracksSelector);

  const lessTracks =
    allTracks && allTracks.length > 8 ? allTracks.slice(0, 8) : undefined;

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
    <div className="flex flex-col w-full h-max bg-white md:rounded-[8px] rounded-[4px] px-3 py-2 md:px-5 md:py-4">
      <p className="text-black text-xl font-bold">Top Tracks This Month</p>
      <p className="text-black font-medium text-md">Only visible to you</p>

      <div className="grid xs-sm:grid-cols-2 space-1 md:flex md:flex-row md:flex-wrap">
        {showMoreTracks ? trackPreviewsShowMore() : trackPreviewsShowLess()}
      </div>

      <button
        className="w-max self-start px-2 md:px-8 pt-1 md:py-2 text-black underline font-bold text-sm md:text-md"
        onClick={handleShowHide}
      >
        {showMoreTracks ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default TopTracks;
