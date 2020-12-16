import axios from "axios"
import {environment} from "../Config"

const instance = axios.create({
    baseURL:environment.endpointApi
})

instance.interceptors.request.use(
    function(config) {

        const token = localStorage.getItem("token");
        if(token){
            config.headers["x-access-token"] = token;
        }
        
      
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

export default instance