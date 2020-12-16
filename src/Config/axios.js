import axios from "axios"
import {environment} from "../Config"

const instance = axios.create({
    baseURL:environment.endpointApi
})

export default instance