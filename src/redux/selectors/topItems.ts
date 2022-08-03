import { RootState } from "../../types/redux/store";

export const topTracksSelector = ({ topItems }: RootState) =>
  topItems.tracks?.items;

export const topArtistsSelector = ({ topItems }: RootState) =>
  topItems.artists?.items;
