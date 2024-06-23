import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";
import { queryAlbumNewReleases } from "../../api/album";
import { setNewReleaseAlbums } from "../../redux/reducers/albumSlice";

export const getAlbumNewReleases =
  (): AppThunk => async (dispatch, getState) => {
    const token = tokenSelector(getState());

    try {
      if (token) {
        const albums = await queryAlbumNewReleases(token);
        dispatch(setNewReleaseAlbums(albums));
      }
    } catch (e: any) {
      console.warn("Failed Get Album New Releases Thunk: ", e);
    }
  };
