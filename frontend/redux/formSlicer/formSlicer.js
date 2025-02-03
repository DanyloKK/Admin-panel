import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchApi,fetchAdd} from "./api.js";

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
            if (!response.ok) {
                return thunkAPI.rejectWithValue(`Ошибка ${response.status}: ${response.statusText}`);
            }
            return response.data;
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
            const response = await fetchAdd(values);
            console.log(response);
            return response;
        } catch (error) {
            console.log("❌ Ошибка в fetchPosts:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
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
    },
})
