import { RootState } from "../../types/redux/store";

export const isLoggedInSelector = ({ auth }: RootState) => !!auth.token;

export const tokenSelector = ({ auth }: RootState) => auth.token;

export const errorSelector = ({ auth }: RootState) => auth.error;
