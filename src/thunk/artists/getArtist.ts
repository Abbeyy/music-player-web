import { NavigateFunction } from "react-router-dom";
import { queryArtistById } from "../../api/artist/artistById";
import { setArtist } from "../../redux/reducers/artistSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";

export const getArtistById =
  (id: string, navigateTo: NavigateFunction): AppThunk =>
  async (dispatch, getState) => {
    const token = tokenSelector(getState());

    try {
      if (token) {
        const artist = await queryArtistById(token, id);

        if (artist) {
          dispatch(setArtist(artist));
          navigateTo("/artist");
        } else {
          console.warn("Failed Get Artist By Id Thunk");
        }
      }
    } catch (e: any) {
      console.warn("Failed Get Artist By Id Thunk: ", e);
    }
  };
