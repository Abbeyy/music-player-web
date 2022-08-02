import { queryUsersTopTracks } from "../api/usersTopTracks";
import { setTopTracks } from "../redux/reducers/topItemsSlice";
import { tokenSelector } from "../redux/selectors/auth";
import { AppThunk } from "../types/redux/store";

export const getUsersTopTracks = (): AppThunk => async (dispatch, getState) => {
  const token = tokenSelector(getState());

  try {
    if (token) {
      const usersTopTracks = await queryUsersTopTracks(token);

      if (usersTopTracks) {
        dispatch(setTopTracks(usersTopTracks));
      } else {
        console.warn("Failed Get User's Top Tracks Thunk");
      }
    }
  } catch (e: any) {
    console.warn("Failed Get User's Top Tracks Thunk: ", e);
  }
};
