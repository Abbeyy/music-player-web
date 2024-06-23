import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";
import { queryTracksRecommendations } from "../../api/tracks";
import { setRecommendations } from "../../redux/reducers/tracksSlice";
import { queryGenreSeeds } from "../../api/genres";

export const getTrackRecommendations =
  (): AppThunk => async (dispatch, getState) => {
    const token = tokenSelector(getState());

    try {
      if (token) {
        const params = await queryGenreSeeds(token);

        if (params?.length) {
          const randomIdx = getRandomNum(0, params.length - 10);

          const tracks = await queryTracksRecommendations(token, {
            seed_genres: params.slice(randomIdx, randomIdx + 9).join(","),
            seed_artists: "",
            seed_tracks: "",
          });
          dispatch(setRecommendations(tracks));
        }
      }
    } catch (e: any) {
      console.warn("Failed Get Track Recommendations Thunk: ", e);
    }
  };

const getRandomNum = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};
