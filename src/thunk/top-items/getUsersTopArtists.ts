import { queryUsersTopItems } from "../../api/topItems";
import { setTopArtists } from "../../redux/reducers/topItemsSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";

export const getUsersTopArtists =
  (): AppThunk => async (dispatch, getState) => {
    const token = tokenSelector(getState());

    try {
      if (token) {
        const usersTopArtists = await queryUsersTopItems(token, "artists");

        if (usersTopArtists) {
          dispatch(setTopArtists(usersTopArtists));
        } else {
          console.warn("Failed Get User's Top Artists Thunk");
        }
      }
    } catch (e: any) {
      console.warn("Failed Get User's Top Artists Thunk: ", e);
    }
  };
