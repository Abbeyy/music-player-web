import axios from "axios";
import { GET_CURRENT_USERS_PLAYLISTS } from "../../constants/endpoints";

export const queryCurrentUsersPlaylists = async (token: string) => {
  const { data } = await axios.get(`${GET_CURRENT_USERS_PLAYLISTS}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.items;
};
