import { combineReducers } from "redux";
import authenticateReducer from "./autheticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
