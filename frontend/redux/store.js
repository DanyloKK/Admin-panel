import {configureStore} from '@reduxjs/toolkit';
import {formSlicer} from "./formSlicer/formSlicer.js";
import {authSlice} from "./formSlicer/authReducer.js";

export const store = configureStore({
    reducer: {
       formInfo: formSlicer.reducer,
        auth:authSlice.reducer,
    }
})