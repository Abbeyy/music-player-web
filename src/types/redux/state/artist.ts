import { Album } from "../../album";
import { Artist } from "../../artist";

export type ArtistState = {
  artist: Artist | null;
  albums: Album[] | null;
};
