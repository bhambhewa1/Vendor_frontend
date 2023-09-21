import { toast } from "react-toastify";
import { REQUEST_LIST,VENDOR_LIST,VENDOR_RESPONSE } from "../actionCreator";
import AdminApi from "../../services/AdminPage";


export const RequestListAPI = () => {
    return {
      type: REQUEST_LIST,
    };
  };

  export const sendLoginResponseAPI = () => {
    return {
      type: VENDOR_RESPONSE,
    };
  };

  export const VendorListAPI = () => {
    return {
      type: VENDOR_LIST,
    };
  };

export const getRequestList = (data) => async (dispatch) => {
    try {
      let response = await AdminApi.requestVendorRequest(data);
  
      if (response?.data) {
        dispatch(RequestListAPI(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        response?.data?.errors?.map((item) => {
          return toast.error(item);
        });
      }
    } catch (err) {}
  };

  export const sendLoginResponse = (data) => async (dispatch) => {
    try {
      let response = await AdminApi.sendLoginResponse(data);
  
      if (response?.data) {
        dispatch(sendLoginResponseAPI(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        response?.data?.errors?.map((item) => {
          return toast.error(item);
        });
      }
    } catch (err) {}
  };

  export const getVendorList = (data) => async (dispatch) => {
    try {
      let response = await AdminApi.requestVendorList(data);
  
      if (response?.data) {
        dispatch(VendorListAPI(response?.data));
        // toast.success(response?.data?.message)
        // storage.set.authToken(response?.data?.token)
        return response;
      } else {
        response?.data?.errors?.map((item) => {
          return toast.error(item);
        });
      }
    } catch (err) {}
  };