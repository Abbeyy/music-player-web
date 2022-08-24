import { RootState } from "../../types/redux/store";

export const currentUsersPlaylists = ({ playlist }: RootState) =>
  playlist.currentUsersPlaylists;
