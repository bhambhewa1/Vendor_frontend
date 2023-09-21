import { toast } from "react-toastify";
import { LOGIN_USER } from "../actionCreator";
import LoginApi from "../../services/login";


export const LogInUser = () => {
    return {
      type: LOGIN_USER,
    };
  };

export const getLogin = (data) => async (dispatch) => {
    try {
      let response = await LoginApi.requestLogin(data);
  
      if (response?.data) {
        dispatch(LogInUser(response?.data));
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