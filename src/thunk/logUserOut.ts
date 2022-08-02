import { setCurrentUser, setToken } from "../redux/reducers/authSlice";
import { setArtistsSearch } from "../redux/reducers/searchSlice";
import { setTopTracks } from "../redux/reducers/topItemsSlice";
import { setTopic } from "../redux/reducers/welcomeSlice";
import { Topic } from "../types/redux/state/welcome";
import { AppThunk } from "../types/redux/store";

export const logUserOut = (): AppThunk => async (dispatch) => {
  try {
    window.localStorage.removeItem("token");
    dispatch(setToken(null));

    dispatch(setTopic(Topic.HOME));
    dispatch(setCurrentUser(null));
    dispatch(setTopTracks(null));
    dispatch(setArtistsSearch([]));
  } catch (e: any) {
    console.warn("Failed Log User Out Thunk: ", e);
  }
};
