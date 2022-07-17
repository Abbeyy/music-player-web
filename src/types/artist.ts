import { ExternalURL, Followers, Image } from ".";

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
