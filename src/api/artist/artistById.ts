import axios from "axios";
import { GET_ARTIST } from "../../constants/endpoints";

export const queryArtistById = async (token: string, id: string) => {
  const { data } = await axios.get(`${GET_ARTIST}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
