import { ExternalURL, Followers, Image } from ".";
import { Track } from "./track";
import { User } from "./users";

export type Playlist = {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: User;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    items: Track[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  type: string;
  uri: string;
};
