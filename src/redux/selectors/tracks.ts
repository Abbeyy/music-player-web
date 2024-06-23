import { RootState } from "../../types/redux/store";

export const tracksRecommendationsSelector = ({ tracks }: RootState) =>
  tracks.recommendations;
