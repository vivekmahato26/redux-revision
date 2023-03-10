import { configureStore } from "@reduxjs/toolkit";
import asyncSlice from "./slice/asyncSlice";


import counterSlice from "./slice/counterSlice";


export default configureStore({
    reducer:{
        Counter:counterSlice.reducer,
        Async: asyncSlice.reducer
    }
})