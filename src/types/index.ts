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

export enum RESTRICTION {
  MARKET = "market",
  PRODUCT = "product",
  EXPLICIT = "explicit",
}

export enum TOP_ITEM {
  ARTISTS = "artists",
  TRACKS = "tracks",
}

export enum TOPIC {
  ARTISTS = "artists",
  ALBUMS = "albums",
  TRACKS = "tracks",
  HOME = "home",
}
