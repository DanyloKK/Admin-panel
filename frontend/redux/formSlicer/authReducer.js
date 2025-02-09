import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authFetchApi} from "./apiAuth.js";
;


let initialState = {
    users: [],
    isLoading: false,
    error: null,
}
export const createUser = createAsyncThunk(
    "auth/createUser",
    async (values, thunkAPI) => {
        try {
            const response = await authFetchApi(values);
            console.log(response)
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.status = 'loading';
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = 'succeeded';
                state.users.push(action.payload.username);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.status = 'failed';
                state.error = action.payload;
            });

    }
})
