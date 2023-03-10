import { createSlice } from "@reduxjs/toolkit";

const counterSlice =  createSlice({
    name:"Counter",
    initialState:{
        value:0
    },
    reducers:{
        increment: (state,action) =>{
            state.value++;
        },
        decrement : (state,action) => {
            state.value--;
        },
        increseBy: (state,action) => {
            state.value += action.payload
        }
    }
});

export const {increment,decrement,increseBy} = counterSlice.actions;

export default counterSlice;
