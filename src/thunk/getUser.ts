import { queryCurrentUser } from "../api/current-user/currentUser";
import { setCurrentUser } from "../redux/reducers/authSlice";
import { AppThunk } from "../types/redux/store";

export const getUser =
  (token: string): AppThunk =>
  async (dispatch) => {
    try {
      const currentUser = await queryCurrentUser(token);

      if (currentUser) {
        dispatch(setCurrentUser(currentUser));
      } else {
        console.warn("Failed Get User Thunk");
      }
    } catch (e: any) {
      console.warn("Failed Get User Thunk: ", e);
    }
  };
