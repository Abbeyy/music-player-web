import { useState } from "react";
import { useAppSelector } from "../../../../hooks";
import { isLoggedInSelector } from "../../../../redux/selectors/auth";

import styles from "./Artists.module.css";

const ArtistsSearch = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!searchValue.length) {
        console.log("Entered on empty: clear any content");
      } else {
        console.log(`Entered with ${searchValue}, querying API...`);
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
