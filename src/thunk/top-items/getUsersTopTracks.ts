import { queryUsersTopItems } from "../../api/topItems";
import { setTopTracks } from "../../redux/reducers/topItemsSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { TOP_ITEM } from "../../types";
import { AppThunk } from "../../types/redux/store";
import { TopTracks } from "../../types/topItems";

export const getUsersTopTracks = (): AppThunk => async (dispatch, getState) => {
  const token = tokenSelector(getState());

  try {
    if (token) {
      const usersTopTracks: TopTracks = await queryUsersTopItems(
        token,
        TOP_ITEM.TRACKS
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
