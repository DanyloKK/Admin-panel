import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authFetchApi, authGetUsers} from "./apiAuth.js";


let initialState = {
    users: [],
    currentUser: "",
    isLoading: false,
    error: null,
    status: "",
}

export const logUser = createAsyncThunk(
    "auth/createUser",
    async (values, thunkAPI) => {
        try {
            const response = await authFetchApi(values);
            if (!response) {
                throw new Error("Response is empty");
            }
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const getUser = createAsyncThunk(
    "auth/getUser",
    async (_, thunkApi) => {
        try {
            const response = await authGetUsers();
            return response
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(logUser.pending, (state) => {
                state.isLoading = true;
                state.status = 'loading';
            })
            .addCase(logUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = 'succeeded';
                state.currentUser = action.payload;
            })
            .addCase(logUser.rejected, (state, action) => {
                state.isLoading = false;
                state.status = 'failed';
                state.error = action.payload;
                state.status = "Invalid login or password"
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
                state.status = 'loading';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = 'succeeded';
                state.users = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.status = 'failed';
                state.error = action.payload;
            });

    }
})
