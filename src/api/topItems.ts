import axios from "axios";
import { TOP_ITEMS } from "../constants/endpoints";

type Item = "artists" | "tracks";

export const queryUsersTopItems = async (token: string, item: Item) => {
  const { data } = await axios.get(`${TOP_ITEMS}/${item}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
