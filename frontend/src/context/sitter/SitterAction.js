import axios from "axios";
import apiUrl from "../../apiConfig";

export const getSitters = async () => {
  const response = await axios.get(`${apiUrl}/sitters`);
  // console.log(response);
  return response.data.sitters;
};

export const getSitterAndReviews = async (id) => {
  const [sitter, sitterReviews] = await Promise.all([
    axios.get(`${apiUrl}/sitters/${id}`),
    axios.get(`${apiUrl}/reviews/${id}`),
  ]);
  return {
    sitter: sitter.data.sitter,
    sitterReviews: sitterReviews.data.reviews,
  };
};

// export const createSitter = async (user, uploadData) => {
//   try {
//     const response = await axios({
//       headers: {
//         Authorization: `Token ${user.token}`,
//       },
//       method: "post",
//       url: `${apiUrl}/sitters`,
//       data: uploadData,
//     });

//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createSitter = async (user, uploadData) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const response = await axios.post(`${apiUrl}/sitters`, uploadData, config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSitter = async (user, id) => {
  const response = await axios.delete(`${apiUrl}/sitters/${id}`, {
    headers: {
      Authorization: `Token ${user.token}`,
    },
  });
  return response;
};
