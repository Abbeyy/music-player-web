import { RootState } from "../../types/redux/store";

export const artistsSelector = ({ search }: RootState) => search.artists;

export const loadingSelector = ({ search }: RootState) => search.loading;

export const tracksSelector = ({ search }: RootState) => search.tracks;

export const albumsSelector = ({ search }: RootState) => search.albums;
