import { Album } from "../../album";
import { Artist } from "../../artist";

export type AlbumState = {
  newReleases: NewReleases | null;
};

export type NewReleases = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Album[];
};

enum AlbumType {
  Album = "album",
  Single = "single",
  Compilation = "compilation",
}

enum DatePrecision {
  Day = "day",
  Month = "month",
  Year = "year",
}

export type NewReleaseAlbum = {
  album_type: AlbumType;
  total_tracks: number;
  available_markets: string[];
  external_urls: Record<string, any>;
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: DatePrecision;
  restrictions: Record<string, any>;
  type: "album";
  uri: string;
  artists: Pick<
    Artist,
    "external_urls" | "href" | "id" | "name" | "type" | "uri"
  >[];
};
