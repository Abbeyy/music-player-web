import { RootState } from "../../types/redux/store";

export const artistSelector = ({ artist }: RootState) => artist.artist;

export const artistAlbumsSelector = ({ artist }: RootState) => artist.albums;
