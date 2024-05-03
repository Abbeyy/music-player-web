import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { topTracksSelector } from "../../../../redux/selectors/topItems";
import { getUsersTopTracks } from "../../../../thunk/current-user/top-items/getUsersTopTracks";
import TrackPreview from "../../tracks/TrackPreview";

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
    <div className="flex flex-col w-max h-max bg-[#291d28] rounded-[8px] px-5 py-4">
      <p className="text-white text-xl font-bold">Top Tracks This Month</p>
      <p className="text-white font-medium text-md">Only visible to you</p>

      <div className="flex flex-row space-4 overflow-x-scroll">
        {showMoreTracks ? trackPreviewsShowMore() : trackPreviewsShowLess()}
      </div>

      <button
        className="w-max self-start px-4 py-2 text-white underline font-bold text-md"
        onClick={handleShowHide}
      >
        {showMoreTracks ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default TopTracks;
