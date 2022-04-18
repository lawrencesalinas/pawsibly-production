import axios from "axios";
import apiUrl from "../../apiConfig";


const userConfig = axios.create({
  baseURL: apiUrl,
});

export const getUsers = async (user) => {
  const response = await userConfig.get(`/profile`, {
    headers: { Authorization: `token ${user.token}` },
  });
  console.log(response);
  return response.data.user;
};
