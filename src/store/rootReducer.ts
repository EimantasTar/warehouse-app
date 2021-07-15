import { combineReducers } from "redux";
import { productSlice } from "./slices/productSlice";

const rootReducer = combineReducers({
  product: productSlice.reducer,
});

export default rootReducer;
