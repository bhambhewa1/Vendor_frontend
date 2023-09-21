import { Api } from "../../../config/request";

export const requestVendorRequest= async (data) => {
    return Api.PostRequest("/admin/requests", data);
  };

  export const sendLoginResponse= async (data) => {
    return Api.PostRequest("/admin/requests/response", data);
  };

  export const requestVendorList= async (data) => {
    return Api.PostRequest("/admin/vendor/list", data);
  };

  export const SaveProductDet= async (data) => {
    return Api.PostRequest("/product/add", data);
  };

  export const getProductListData= async (data) => {
    return Api.PostRequest("/product/list", data);
  };

  export const fetchProductDet= async (data) => {
    return Api.PostRequest("/product/details", data);
  };

  export const deletingProduct= async (data) => {
    return Api.PostRequest("/product/delete", data);
  };

  const AdminApi = {
    requestVendorRequest,
    sendLoginResponse,
    requestVendorList,
    SaveProductDet,
    getProductListData,
    fetchProductDet,
    deletingProduct
  };
  export default AdminApi;