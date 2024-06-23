import { RootState } from "../../types/redux/store";

export const albumNewReleasesSelector = ({ album }: RootState) =>
  album.newReleases;
