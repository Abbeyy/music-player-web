import { Track } from "../track";

export type TopTracks = {
  href: string;
  items: Track[];
  limit: number;
  next: string | null; //URL to next page of items, null if none
  offset: number;
  previous: string | null;
  total: number;
};
