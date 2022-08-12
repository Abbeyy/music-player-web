import { queryAlbums } from "../../api/albums";
import { setLoading, setAlbumsSearch } from "../../redux/reducers/searchSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";

export const searchAlbums =
  (searchValue: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));
    //add error state

    try {
      const token = tokenSelector(getState());

      if (token) {
        const albums = await queryAlbums(token, searchValue);

        dispatch(setAlbumsSearch(albums));
      }
    } catch (e: any) {
      console.warn("Search Albums Thunk Failed: ", e);
    } finally {
      dispatch(setLoading(false));
    }
  };
