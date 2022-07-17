import { RootState } from "../../types/redux/store";

export const currentUserSelector = ({ auth }: RootState) => auth.currentUser;

export const currentUserNameSelector = ({ auth }: RootState) =>
  auth.currentUser?.display_name;

export const errorSelector = ({ auth }: RootState) => auth.error;

export const isLoggedInSelector = ({ auth }: RootState) => !!auth.token;

export const tokenSelector = ({ auth }: RootState) => auth.token;
