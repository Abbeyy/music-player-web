import { RootState } from "../../types/redux/store";

export const topTracksSelector = ({ topItems }: RootState) =>
  topItems.tracks?.items;
