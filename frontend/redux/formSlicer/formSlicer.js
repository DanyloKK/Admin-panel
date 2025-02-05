import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchApi, fetchAdd, fetchDelete,fetchUpdate} from "./api.js";

const initialState = {
    formData:[],
    isLoading:false,
    status:"",
}
export const fetchData = createAsyncThunk(
    "form/fetchData",
    async (_, thunkAPI) => {
        try {
            const response = await fetchApi();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const fetchPosts = createAsyncThunk(
    "form/fetchPosts",
    async (values, thunkAPI) => {
        console.log("🔍 thunkAPI:", {
            dispatch: thunkAPI.dispatch,
            getState: thunkAPI.getState(),
            extra: thunkAPI.extra,
            requestId: thunkAPI.requestId,
            signal: thunkAPI.signal,
            rejectWithValue: thunkAPI.rejectWithValue,
            fulfillWithValue: thunkAPI.fulfillWithValue,
        });
        try {
            console.log(values);
            const response = await fetchAdd(values);
            console.log(response);
            return response;
        } catch (error) {
            console.log("❌ Ошибка в fetchPosts:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const formDelete = createAsyncThunk(
    "form/formDelete",
    async(id,thunkAPI) =>{
        try{
            const response = await fetchDelete(id);
            console.log(response)
            thunkAPI.dispatch(fetchData())
            return response
        }catch (error){
            console.log("Error in deletion",error)
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const formUpdate = createAsyncThunk(
    "form/formUpdate",
    async({ id, values },thunkAPI) =>{
        try{
            console.log(id,values);
            const response = await fetchUpdate(id,values);
            console.log(response)
            thunkAPI.dispatch(fetchData())
            return response
        }catch (error){
            console.log("Error in editing",error)
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const formSlicer = createSlice({
    name: "form",
   initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.status = "loading...";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log("Пришедшие данные в Redux:", action.payload);
                state.isLoading = false;
                state.formData.push(action.payload);
                state.status = "succeeded";
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchData.pending,(state)=>{
                state.isLoading = true;
                state.status = "loading...";
            })
            .addCase(fetchData.fulfilled,(state,action)=>{
                console.log("Пришедшие данные в Redux:", action.payload);
                state.isLoading = false;
                state.formData = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchData.rejected,(state,action)=>{
                state.isLoading = false;
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(formDelete.pending,(state)=>{
                state.isLoading = true;
                state.status = "loading...";
            })
            .addCase(formDelete.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.formData = state.formData.filter(item => item.id !== action.payload.id);
                state.status = "succeeded";
                console.log("Пришедшие данные в Redux:", action.payload);
            })
            .addCase(formDelete.rejected,(state,action)=>{
                state.isLoading = false;
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(formUpdate.pending,(state)=>{
                state.isLoading = true;
                state.status = "loading...";
            })
            .addCase(formUpdate.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.formData = state.formData.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...action.payload };
                    }
                    return item;
                });
                state.status = "succeeded";
                console.log("Пришедшие данные в Redux:", action.payload);
            })
            .addCase(formUpdate.rejected,(state,action)=>{
                state.isLoading = false;
                state.status = "failed";
                state.error = action.payload;
            })
    },
})
