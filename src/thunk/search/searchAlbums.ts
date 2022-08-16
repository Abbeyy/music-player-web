import { querySearch } from "../../api/search";
import { setLoading, setAlbumsSearch } from "../../redux/reducers/searchSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { SEARCH_TYPE } from "../../types";
import { AppThunk } from "../../types/redux/store";

export const searchAlbums =
  (searchValue: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));
    //add error state

    try {
      const token = tokenSelector(getState());

      if (token) {
        const albums = await querySearch(token, searchValue, SEARCH_TYPE.ALBUM);

        dispatch(setAlbumsSearch(albums));
      }
    } catch (e: any) {
      console.warn("Search Albums Thunk Failed: ", e);
    } finally {
      dispatch(setLoading(false));
    }
  };
