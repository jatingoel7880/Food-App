import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore= configureStore({
    reducer:{
        cart:  cartReducer,
        //this reducer is basically a appStore reducer which consists of small reducers 
        //from different slices. Each slice will have its own reducer.
    },
}
);

export default appStore;