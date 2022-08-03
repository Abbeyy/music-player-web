import { queryTracks } from "../../api/tracks";
import { setLoading, setTracksSearch } from "../../redux/reducers/searchSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";

export const searchTracks =
  (searchValue: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));
    //add error state

    try {
      const token = tokenSelector(getState());

      if (token) {
        const tracks = await queryTracks(token, searchValue);

        dispatch(setTracksSearch(tracks));
      }
    } catch (e: any) {
      console.warn("Search Tracks Thunk Failed: ", e);
    } finally {
      dispatch(setLoading(false));
    }
  };
