import { RootState } from "../../types/redux/store";

export const artistSelector = ({ artist }: RootState) => artist.artist;
