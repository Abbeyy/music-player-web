import { useState } from "react";
import { useAppDispatch } from "../../../hooks";
import {
  setAlbumsSearch,
  setArtistsSearch,
  setTracksSearch,
} from "../../../redux/reducers/searchSlice";
import { searchAlbums } from "../../../thunk/search/searchAlbums";
import { searchArtists } from "../../../thunk/search/searchArtists";
import { searchTracks } from "../../../thunk/search/searchTracks";

type SearchItem = "artists" | "tracks" | "albums";

type Props = {
  item: SearchItem;
};

const DiscoverSearch = (props: Props) => {
  const { item } = props;

  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      switch (item) {
        case "artists":
          dispatch(
            !searchValue.length
              ? setArtistsSearch([])
              : searchArtists(searchValue)
          );
          break;
        case "tracks":
          dispatch(
            !searchValue.length
              ? setTracksSearch([])
              : searchTracks(searchValue)
          );
          break;
        case "albums":
          dispatch(
            !searchValue.length
              ? setAlbumsSearch([])
              : searchAlbums(searchValue)
          );
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="">
      <input
        placeholder="Start typing"
        type="text"
        value={searchValue}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default DiscoverSearch;
