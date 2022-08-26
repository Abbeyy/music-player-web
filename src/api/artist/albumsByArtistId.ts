import axios from "axios";
import { GET_ARTIST } from "../../constants/endpoints";

export const queryAlbumsByArtistId = async (token: string, id: string) => {
  const { data } = await axios.get(`${GET_ARTIST}/${id}/albums`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.items;
};
