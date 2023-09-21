import { combineReducers } from "redux";
import Login from "./login";
import Register from "./register";

const rootReducer = combineReducers({
  Register,
  Login,
});
export default rootReducer;
