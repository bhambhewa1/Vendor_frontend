import { toast } from "react-toastify";
import { REGISTER_USER } from "../actionCreator";
import RegisterApi from "../../services/register";
import { storage } from "../../../config/storage";

export const RegisterUser = (payload) => {
    return {
      type: REGISTER_USER,
      payload,
    };
  };

export const getRegisterUser = (data) => async (dispatch) => {
    try {
      let response = await RegisterApi.requestUserRegister(data);
  
      if (response?.data?.status) {
        dispatch(RegisterUser(response?.data));
        toast.success(response?.data?.message);
        storage.set.userId(response?.data?.user);
        return response;
      } else {
        response?.data?.errors?.map((item) => {
          return toast.error(item);
        });
      }
    } catch (err) {}
  };