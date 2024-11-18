import { useEffect } from "react";
import axios from "axios";

const useAxiosFetch = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://yoga-server-4.onrender.com',

      });
     
    //   Interceptors
    useEffect( ()=>{

        // reqst interceptor

        const requestInterceptor=axios.interceptors.request.use(function (config) {
            return config;
          }, function (error) {
            return Promise.reject(error);
          });

        //   response interceptor
        const responseInterceptor=axios.interceptors.response.use(function (response) {
            return response;
          }, function (error) {
            return Promise.reject(error);
          });

          return()=>{
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
          }


    },[axiosInstance])

  return axiosInstance; 
}

export default useAxiosFetch