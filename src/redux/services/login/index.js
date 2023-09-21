import { Api } from "../../../config/request";

export const requestLogin = async (data) => {
    return Api.PostRequest("/login", data);
  };

  const LoginApi = {
    requestLogin,
  };
  export default LoginApi;