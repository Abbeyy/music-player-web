import axios from "axios";
import { CURRENT_USER } from "../constants/endpoints";

export const queryCurrentUser = async (token: string) => {
  const { data } = await axios.get(CURRENT_USER, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
