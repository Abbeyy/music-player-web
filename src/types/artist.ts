export type Artist = {
  external_urls: ExternalURL;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
};

type ExternalURL = { spotify: string };

type Followers = {
  href: string;
  total: number;
};

type Image = {
  url: string;
  height: number;
  width: number;
};
