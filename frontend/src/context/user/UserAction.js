import axios from "axios"
import apiUrl from "../../apiConfig"

export const getUserDetails = async (user) => {
  try {
    const response = await axios.get(`${apiUrl}/profile`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
    return response.data.user
  } catch (error) {
    console.log(error)
  }
}

export const getUserReview = async (user) => {
  try {
    const response = await axios.get(`${apiUrl}/reviews`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
    return response.data.reviews
  } catch (error) {
    console.log(error)
  }
}

export const signUp = (credentials) => {
  return axios({
    method: "POST",
    url: apiUrl + "/sign-up",
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation,
        first_name: credentials.first_name,
        last_name: credentials.last_name,
      },
    },
  })
}

export const signIn = (credentials) => {
  return axios({
    url: apiUrl + "/sign-in",
    method: "POST",
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
      },
    },
  })
}

export const signOut = (user) => {
  return axios({
    url: apiUrl + "/sign-out",
    method: "DELETE",
    headers: {
      Authorization: `Token token=${user.token}`,
    },
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + "/change-password",
    method: "PATCH",
    headers: {
      Authorization: `Token token=${user.token}`,
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword,
      },
    },
  })
}

// fetch data with authorization
export const fetchWithAuth = (endpoint, setState, item, user) => {
  async function fetchData() {
    try {
      const { data } = await axios.get(`${apiUrl}/${endpoint}`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      })
      //   console.log("apicall", data);
      setState(data[item])
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
}

// fetch data with no authorization
export const fetchNoAuth = (endpoint, setState, item) => {
  async function fetchData() {
    try {
      const { data } = await axios.get(`${apiUrl}/${endpoint}`)
      //   console.log(data);
      setState(data[item])
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
}
