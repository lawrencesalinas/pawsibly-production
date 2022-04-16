import apiUrl from '../apiConfig'
import axios from 'axios'

export const fetchWithAuth = (endpoint, setState, item, user) => {
  async function fetchData() {
    try {
      const { data } = await axios.get(`${apiUrl}/${endpoint}`, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      });
      console.log('apicall', data);
      setState(data[item])
    } catch (error) {
      console.log(error)
    }
  }
  fetchData();
}


export const fetchNoAuth = (endpoint, setState, item) => {
  async function fetchData() {
    try {
      const { data } = await axios.get(`${apiUrl}/${endpoint}`,);
      console.log(data);
      setState(data[item])
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}