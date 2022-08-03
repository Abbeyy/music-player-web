import { queryArtists } from "../../api/artists";
import { setLoading, setArtistsSearch } from "../../redux/reducers/searchSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";

export const searchArtists =
  (searchValue: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));
    //add error state

    try {
      const token = tokenSelector(getState());

      if (token) {
        const artists = await queryArtists(token, searchValue);

        dispatch(setArtistsSearch(artists));
      }
    } catch (e: any) {
      console.warn("Search Artists Thunk Failed: ", e);
    } finally {
      dispatch(setLoading(false));
    }
  };
