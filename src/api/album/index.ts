import axios from "axios";
import { GET_ALBUM_NEW_RELEASES } from "../../constants/endpoints";

export const queryAlbumNewReleases = async (token: string) => {
  const { data } = await axios.get(GET_ALBUM_NEW_RELEASES, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data?.albums;
};
