import { configureStore } from "@reduxjs/toolkit";
//import categorySlice from "./category";
import globalSlice from "./globalredux";

export default configureStore({
  reducer: {
    global: globalSlice,
   // product: productSlice,
   
  },
});