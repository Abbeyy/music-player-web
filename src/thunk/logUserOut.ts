import { setCurrentUser, setToken } from "../redux/reducers/authSlice";
import {
  setAlbumsSearch,
  setArtistsSearch,
  setTracksSearch,
} from "../redux/reducers/searchSlice";
import { setTopArtists, setTopTracks } from "../redux/reducers/topItemsSlice";
import { setTopic } from "../redux/reducers/discoverSlice";
import { TOPIC } from "../types";
import { AppThunk } from "../types/redux/store";

export const logUserOut = (): AppThunk => async (dispatch) => {
  try {
    window.localStorage.removeItem("token");
    dispatch(setToken(null));

    dispatch(setTopic(TOPIC.HOME));

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
