import { ExternalURL, Followers, Image } from ".";

export type CurrentUser = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
};

type ExplicitContent = {
  filter_enabled: boolean;
  filter_locked: boolean;
};

export type User = {
  display_name: string | null;
  external_urls: ExternalURL;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
};
