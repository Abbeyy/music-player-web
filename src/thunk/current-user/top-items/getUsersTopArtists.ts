import { queryUsersTopItems } from "../../../api/current-user/topItems";
import { setTopArtists } from "../../../redux/reducers/topItemsSlice";
import { tokenSelector } from "../../../redux/selectors/auth";
import { TOP_ITEM } from "../../../types";
import { AppThunk } from "../../../types/redux/store";

export const getUsersTopArtists =
  (): AppThunk => async (dispatch, getState) => {
    const token = tokenSelector(getState());

    try {
      if (token) {
        const usersTopArtists = await queryUsersTopItems(
          token,
          TOP_ITEM.ARTISTS
        );

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
