import { API_URL } from "../../ReusableCompnents/StaticKeys";
import axios from "axios";
export const Request = () => {
  return axios.create({
    baseURL: API_URL,
    headers: {},
  });
};
