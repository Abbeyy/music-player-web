import { setCurrentUser, setToken } from "../redux/reducers/authSlice";
import {
  setAlbumsSearch,
  setArtistsSearch,
  setTracksSearch,
} from "../redux/reducers/searchSlice";
import { setTopArtists, setTopTracks } from "../redux/reducers/topItemsSlice";
import { AppThunk } from "../types/redux/store";

export const logUserOut = (): AppThunk => async (dispatch) => {
  try {
    window.localStorage.removeItem("token");
    dispatch(setToken(null));

    dispatch(setCurrentUser(null));

    dispatch(setTopTracks(null));
    dispatch(setTopArtists(null));

    dispatch(setArtistsSearch([]));
    dispatch(setAlbumsSearch([]));
    dispatch(setTracksSearch([]));
  } catch (e: any) {
    console.warn("Failed Log User Out Thunk: ", e);
  }
};
