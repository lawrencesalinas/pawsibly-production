import axios from "axios";
import apiUrl from "../../apiConfig";

export const getUser = async (user) => {
  try {
    const  response  = await axios.get(`${apiUrl}/profile`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });
    return response.data.user;
  } catch (error) {
    console.log(error);
  }
};

// async function fetchData() {
//   try {
//     const { data } = await axios.get(`${apiUrl}/${endpoint}`, {
//       headers: {
//         Authorization: `Token ${user.token}`,
//       },
//     });
//     console.log("apicall", data);
//     setState(data[item]);
//   } catch (error) {
//     console.log(error);
//   }
// }
