import { Artist } from "../../artist";
import { Track } from "../../track";

export type SearchState = {
  artists: Artist[];
  loading: boolean;
  tracks: Track[];
};
