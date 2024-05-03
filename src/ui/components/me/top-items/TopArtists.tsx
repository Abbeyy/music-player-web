import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { topArtistsSelector } from "../../../../redux/selectors/topItems";
import { getUsersTopArtists } from "../../../../thunk/current-user/top-items/getUsersTopArtists";
import { ArtistPreview } from "../../artists/ArtistPreview";
import TrackPreview from "../../tracks/TrackPreview";

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
    <div className="flex flex-col w-max h-max bg-[#291d28] rounded-[8px] px-5 py-4">
      <p className="text-white text-xl font-bold">Top Artists This Month</p>
      <p className="text-white font-medium text-md">Only visible to you</p>

      <div className="flex flex-row space-4 overflow-x-scroll">
        {showMoreArtists ? artistPreviewsShowMore() : artistPreviewsShowLess()}
      </div>

      <button
        className="w-max self-start px-4 py-2 text-white underline font-bold text-md"
        onClick={handleShowHide}
      >
        {showMoreArtists ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default TopArtists;
