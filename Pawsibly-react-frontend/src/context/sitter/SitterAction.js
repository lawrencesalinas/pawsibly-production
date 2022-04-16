import axios from 'axios'
import apiUrl from '../../apiConfig'

export const getSitters = async() => {
    const response = await axios.get(`${apiUrl}/sitters`)
    // console.log(response);
    return response.data.sitters
}