import { queryAlbumsByArtistId } from "../../api/artist/albumsByArtistId";
import { setArtistsAlbums } from "../../redux/reducers/artistSlice";
import { tokenSelector } from "../../redux/selectors/auth";
import { AppThunk } from "../../types/redux/store";

export const getAlbumsByArtistId =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    const token = tokenSelector(getState());

    try {
      if (token) {
        const albums = await queryAlbumsByArtistId(token, id);

        if (albums) {
          dispatch(setArtistsAlbums(albums));
        } else {
          console.warn("Failed Get Albums By Artist Id Thunk");
        }
      }
    } catch (e: any) {
      console.warn("Failed Get Albums By Artist Id Thunk: ", e);
    }
  };
