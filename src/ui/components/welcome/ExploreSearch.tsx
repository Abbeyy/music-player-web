import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  setArtistsSearch,
  setTracksSearch,
} from "../../../redux/reducers/searchSlice";
import { isLoggedInSelector } from "../../../redux/selectors/auth";
import { searchArtists } from "../../../thunk/search/searchArtists";
import { searchTracks } from "../../../thunk/search/searchTracks";

import styles from "./ExploreSearch.module.css";

type SearchItem = "artists" | "tracks" | "albums";

type Props = {
  item: SearchItem;
};

const ExploreSearch = (props: Props) => {
  const { item } = props;

  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!searchValue.length) {
        switch (item) {
          case "artists":
            dispatch(setArtistsSearch([]));
            break;
          case "tracks":
            dispatch(setTracksSearch([]));
            break;
          case "albums":
            break;
          default:
            break;
        }
      } else {
        switch (item) {
          case "artists":
            dispatch(searchArtists(searchValue));
            break;
          case "tracks":
            dispatch(searchTracks(searchValue));
            break;
          case "albums":
            break;
          default:
            break;
        }
      }
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className={styles["PanelElement"]}>
      <input
        placeholder="Start typing..."
        className={styles["SearchInput"]}
        type="text"
        value={searchValue}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default ExploreSearch;
