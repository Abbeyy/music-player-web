import { TopArtists, TopTracks } from "../../topItems";

export type TopItemsState = {
  tracks: TopTracks | null;
  artists: TopArtists | null;
};
