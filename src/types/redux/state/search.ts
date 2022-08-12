import { Album } from "../../album";
import { Artist } from "../../artist";
import { Track } from "../../track";

export type SearchState = {
  albums: Album[];
  artists: Artist[];
  loading: boolean;
  tracks: Track[];
};
