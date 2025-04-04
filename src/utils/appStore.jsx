import { configureStore } from "@reduxjs/toolkit";
import CoinReducer from './coinSlice'
const appStore=configureStore({
   reducer:{
    coin:CoinReducer
   }
});

export default appStore;