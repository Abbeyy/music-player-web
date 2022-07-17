import { CurrentUser } from "../../users";

export type AuthState = {
  token: string | null;
  error: string | undefined;
  currentUser: CurrentUser | null;
};
