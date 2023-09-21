import { Api } from "../../../config/request";

export const requestUserRegister = async (data) => {
  return Api.PostRequest("/user/register", data);
};

const RegisterApi = {
    requestUserRegister,
  };
  export default RegisterApi;