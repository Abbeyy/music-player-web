import { queryUsersTopItems } from "../../api/topItems";
import { setTopTracks } from "../../redux/reducers/topItemsSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";
import { TopTracks } from "../../types/redux/topItems";

export const getUsersTopTracks = (): AppThunk => async (dispatch, getState) => {
  const token = tokenSelector(getState());

  try {
    if (token) {
      const usersTopTracks: TopTracks = await queryUsersTopItems(
        token,
        "tracks"
      );

      if (usersTopTracks) {
        const usersTopTracksFormatted = {
          ...usersTopTracks,
          tracks: usersTopTracks.items,
        };
        dispatch(setTopTracks(usersTopTracksFormatted));
      } else {
        console.warn("Failed Get User's Top Tracks Thunk");
      }
    }
  } catch (e: any) {
    console.warn("Failed Get User's Top Tracks Thunk: ", e);
  }
};
