import {configureStore} from '@reduxjs/toolkit';
import {formSlicer} from "./formSlicer/formSlicer.js";

export const store = configureStore({
    reducer: {
       formInfo: formSlicer.reducer,
    }
})