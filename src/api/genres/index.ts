import axios from "axios";
import { GET_GENRE_SEEDS } from "../../constants/endpoints";

export const queryGenreSeeds = async (token: string) => {
  const { data } = await axios.get(GET_GENRE_SEEDS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data?.genres;
};
