import { ExternalURL, RESTRICTION } from ".";
import { AlbumSpecifics } from "./album";
import { Artist } from "./artist";

export type Track = {
  album: AlbumSpecifics;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalURL;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: Track;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

type Restrictions = {
  reason: RESTRICTION;
};

type ExternalIds = {
  isrc: string;
  ean: string;
  upc: string;
};
