import axios from "axios";
import { TOP_ITEMS } from "../constants/endpoints";
import { TOP_ITEM } from "../types";

export const queryUsersTopItems = async (token: string, item: TOP_ITEM) => {
  const { data } = await axios.get(`${TOP_ITEMS}/${item}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
