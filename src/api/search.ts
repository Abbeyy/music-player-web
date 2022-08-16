import axios from "axios";
import { SEARCH } from "../constants/endpoints";
import { SEARCH_TYPE } from "../types";

export const querySearch = async (
  token: string,
  searchValue: string,
  type: SEARCH_TYPE
) => {
  const { data } = await axios.get(SEARCH, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: searchValue,
      type,
    },
  });

  if (type === SEARCH_TYPE.ARTIST) {
    return data.artists.items;
  }
  if (type === SEARCH_TYPE.ALBUM) {
    return data.albums.items;
  }
  return data.tracks.items;
};
