import axios from "axios";
import { GET_TRACKS_RECOMMENDATIONS } from "../../constants/endpoints";
import { TrackRecommendationsParams } from "../../types/tracks";

export const queryTracksRecommendations = async (
  token: string,
  params: TrackRecommendationsParams
) => {
  const { data } = await axios.get(GET_TRACKS_RECOMMENDATIONS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  });

  return data;
};
