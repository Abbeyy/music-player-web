import { querySearch } from "../../api/search";
import { setLoading, setTracksSearch } from "../../redux/reducers/searchSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { SEARCH_TYPE } from "../../types";
import { AppThunk } from "../../types/redux/store";

export const searchTracks =
  (searchValue: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));
    //add error state

    try {
      const token = tokenSelector(getState());

      if (token) {
        const tracks = await querySearch(token, searchValue, SEARCH_TYPE.TRACK);

        dispatch(setTracksSearch(tracks));
      }
    } catch (e: any) {
      console.warn("Search Tracks Thunk Failed: ", e);
    } finally {
      dispatch(setLoading(false));
    }
  };
