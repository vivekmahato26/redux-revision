import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const asyncSlice = createSlice({
    name:"Async Slice",
    initialState:{
        value: {},
    },
    reducers:{},
    extraReducers: builder => builder
    .addCase(fetchData.pending,(state,action) =>{
        state.status = "pending"
    })
    .addCase(fetchData.rejected,(state,action) =>{
        state.status = "rejected"
        state.error = action.error
    })
    .addCase(fetchData.fulfilled,(state,action) =>{
        state.status = "fulfilled"
        state.value = action.payload
    })
})

export const fetchData = createAsyncThunk("Async/fetch", async (url) =>{
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        return error.message;
    }
})

export default asyncSlice;