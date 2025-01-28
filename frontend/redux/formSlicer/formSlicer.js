import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    formData:[],
    isLoading:false,
}
export const formSlicer = createSlice({
    name: "formSlicer",
   initialState,
    reducers: {
        addFormData: (state, action) => {
            state.isLoading = true;
            state.formData.push(action.payload);
        }
    }
})
const {addFormData} = formSlicer.actions;
export const addFormValue = (values) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:8080/form-data",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                values,
            }),
        })
        const data = await response.json();
        dispatch(addFormData(data))
    }catch(err) {
        console.log(err);
    }
}