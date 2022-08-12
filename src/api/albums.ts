import axios from "axios";
import { SEARCH } from "../constants/endpoints";
import { SEARCH_TYPE } from "../types";

export const queryAlbums = async (token: string, searchValue: string) => {
  const { data } = await axios.get(SEARCH, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: searchValue,
      type: SEARCH_TYPE.ALBUM,
    },
  });

  return data.albums.items;
};
