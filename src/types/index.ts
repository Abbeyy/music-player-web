export enum SEARCH_TYPE {
  ARTIST = "artist",
  ALBUM = "album",
  TRACK = "track",
}

export type ExternalURL = { spotify: string };

export type Followers = {
  href: string;
  total: number;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};
