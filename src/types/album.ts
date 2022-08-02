import { ExternalURL, Image } from ".";

export type AlbumSpecifics = {
  album_type: ALBUM_TYPE;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalURL;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: RELEASE_DATE_PRECISE;
  restrictions?: RESTRICTION;
  type: string;
  uri: string;
  album_group: ALBUM_GROUP;
  artists: AlbumArtist[];
};

enum ALBUM_GROUP {
  APPEARS_ON = "appears_on",
  ALBUM = "album",
  SINGLE = "single",
  COMPILATION = "compilation",
}

enum ALBUM_TYPE {
  ALBUM = "album",
  SINGLE = "single",
  COMPILATION = "compilation",
}

enum RELEASE_DATE_PRECISE {
  YEAR = "year",
  MONTH = "month",
  DAY = "day",
}

enum RESTRICTION {
  MARKET = "market",
  PRODUCT = "product",
  EXPLICIT = "explicit",
}

type AlbumArtist = {
  external_urls: ExternalURL;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};
