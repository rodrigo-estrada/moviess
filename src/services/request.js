import axios from "axios"
import { api } from "../constants"
import queryString from 'querystring'
const Request = {
    async getEncoded(url, data = {}) {
        let parameters = { ...data, api_key: api.PRIVATE_KEY }
        console.log(`${api.API_URL}${url}?${queryString.stringify(parameters)}`)
        const response = await axios.get(`${api.API_URL}${url}?${queryString.stringify(parameters)}`)
        console.log(response)
        if (response && response.status === 200)
            return response?.data?.results || response?.data || []
        else {
            return []
        }
    }
}

export default Request