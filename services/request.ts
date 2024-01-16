//@ts-nocheck
import axios from "axios";

const request = axios.create({
  baseURL: "https://casmara-app-api.onrender.com/api",
  timeout: 16000,
});

// request.interceptors.request.use(
//   (config) => {
//     const token = getCookieFromBrowser("access_token");

//     if (token) {
//       config.headers.Authorization = "Bearer " + token;
//     }
    
//     config.params = {...config.params };
//     return config;
//   },

//   (error) => errorHandler(error)
// );

// function errorHandler(error) {
//   if (error?.response) {
//     if (error?.response?.status === 403) {
//     } else if (error?.response?.status === 401) {
//       removeCookie("user");
//       removeCookie("access_token");
//       window.location.replace("/get-started");
//     }
//   }
//   console.log("error => ", error);

//   return Promise.reject(error.response);
// }

// request.interceptors.response.use((response) => response.data, errorHandler);

export default request;