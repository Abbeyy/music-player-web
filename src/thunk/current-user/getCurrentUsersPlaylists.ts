import { queryCurrentUsersPlaylists } from "../../api/current-user/playlists";
import { setCurrentUsersPlaylists } from "../../redux/reducers/playlistsSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";

export const getCurrentUsersPlaylists =
  (): AppThunk => async (dispatch, getState) => {
    const token = tokenSelector(getState());

    try {
      if (token) {
        const currentUsersPlaylists = await queryCurrentUsersPlaylists(token);

        if (currentUsersPlaylists) {
          dispatch(setCurrentUsersPlaylists(currentUsersPlaylists));
        } else {
          console.warn("Failed Get Current User's Playlists Thunk");
        }
      }
    } catch (e: any) {
      console.warn("Failed Get Current User's Playlists Thunk: ", e);
    }
  };
