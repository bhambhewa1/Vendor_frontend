/* eslint-disable no-unreachable */

import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "./apiUrl";
import { storage } from "./storage";

// if there is a video/audio/photo/anymedia then use "Content-Type": "multipart/form-data", otherwise "Content-Type": "application/json",

// export const apiRequest = async (
//   apiUrl,
//   payloadData,
//   contentTypeJson = false
// ) => {
//   try {
//     const res = await axios({
//       url: API_URL + apiUrl,
//       method: "POST",
//       payloadData,
//       headers: {
//         "Content-Type": `${contentTypeJson} === 'application/json': 'multipart/form-data'`,
//         Accept: "application/json",
//         Authorization: storage.fetch.authToken(),
//       },
//     });

   
// };


// export const PostRequest = async (url, data,contentTypeJson=false) => {
//   if(data)
//   Object.assign(data,{user_type:1})
//   try {
//     const res = await axios({
//       url: API_URL + url,
//       method: "POST",
//       data,
//       // body:JSON.stringify(data),
//       headers: {
//         "Content-Type": `${contentTypeJson} === 'application/json': 'multipart/form-data'`,
//         Accept: "application/json",
//         Authorization: storage.fetch.authToken(),
//       },
//     });
//     if (res.data.code == 401) {
//       toast.error("Token is expired. Please login again");
//       setTimeout(() => {
//         localStorage.clear();
//         window.location.href = "/";
//       }, 2000);
//     } else {
//       return res ? res : res.data;
//     }
//   } catch (err) {
//     // toast.error("some error occured");
//   }
// };

export const PostRequest = async (url, data) => {
  try {
    const res = await axios({
      url: API_URL + url,
      method: "POST",
      data,
      // body:JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res ? res : res.data;
  } catch (err) {}
};

export const Api = {
  // apiRequest,
  PostRequest,
};
