import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setArtistsSearch } from "../../../../redux/reducers/searchSlice";
import { isLoggedInSelector } from "../../../../redux/selectors/auth";
import { searchArtists } from "../../../../thunk/searchArtists";

import styles from "./Artists.module.css";

const ArtistsSearch = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!searchValue.length) {
        dispatch(setArtistsSearch([]));
      } else {
        dispatch(searchArtists(searchValue));
      }
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <input
      placeholder="Start typing..."
      className={styles["SearchInput"]}
      type="text"
      value={searchValue}
      onChange={onChangeSearch}
      onKeyDown={onKeyDown}
    />
  );
};

export default ArtistsSearch;
