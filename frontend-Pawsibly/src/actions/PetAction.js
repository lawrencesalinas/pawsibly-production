import axios from "axios";

export const createPets = async (user, uploadData) => {
  const response = await axios.post(`${apiUrl}/pets`, {
    headers: {
      Authorization: `Token ${user.token}`,
    },
    body: uploadData,
  });
  return response.data
};


// fetch(`${apiUrl}/pets`, {
//   method: "POST",
//   headers: {
//     Authorization: `Token ${user.token}`,
//   },
//   body: uploadData,
// })
//   .then((res) => {
//     // console.log("new pet added", res);
//     setTrigger((x) => !x);
//   })
//   // useNavigate(-1)
//   .catch((error) => {
//     console.log(error);
//   });
