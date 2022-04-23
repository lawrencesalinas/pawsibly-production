import axios from "axios";
import apiUrl from "../apiConfig";

export const createdReview = async (user, uploadData) => {
    try{
    const response = await axios.post(`${apiUrl}/reviews`, {
      header: {
        Authorization: `Token ${user.token}`,
      },
      body: uploadData
    })
  } catch(error){
    console.error
  }
}


  export const getReview = async () => {
    try {
      const response = await axios.get(`${apiUrl}/reviews`,
      {
        header: {
          Authorization: `Token ${user.token}`,
        }
      })
    } catch (error) {
      
    }
  }
  // fetch(`${apiUrl}/reviews`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Token ${user.token}`,
  //   },
  //   body: JSON.stringify(sitterReview),
  // })
  //   .then((createdReview) => {
  //     setTrigger((x) => !x);
  //     // console.log("new review added", createdReview);
  //     handleClose(true);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/products/create/`, {}, config);
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
