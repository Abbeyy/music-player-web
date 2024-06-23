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
    allArtists && allArtists.length > 8 ? allArtists.slice(0, 8) : undefined;

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
    <div className="flex flex-col w-full h-max bg-white md:rounded-[8px] rounded-[4px] px-3 py-2 md:px-5 md:py-4">
      <p className="text-black text-xl font-bold">Top Artists This Month</p>
      <p className="text-black font-medium text-md">Only visible to you</p>

      <div className="grid grid-cols-2 xs:flex xs:flex-row xs:flex-wrap space-1">
        {showMoreArtists ? artistPreviewsShowMore() : artistPreviewsShowLess()}
      </div>

      <button
        className="w-max self-start px-2 md:px-8 pt-1 md:py-2 text-black underline font-bold text-sm md:text-md"
        onClick={handleShowHide}
      >
        {showMoreArtists ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default TopArtists;
