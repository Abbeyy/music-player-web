import axios from "axios";
import { TOP_ITEMS } from "../constants/endpoints";

export const queryUsersTopTracks = async (token: string) => {
  const { data } = await axios.get(`${TOP_ITEMS}/tracks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
