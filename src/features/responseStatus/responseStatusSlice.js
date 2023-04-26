import { createSlice } from "@reduxjs/toolkit";

export const responseStatusSlice = createSlice({
    name: 'responseStatus',
    initialState: {
        value: false
    },
    reducers: {
        setResponseStatus: (state, action) => {
           state.value = action.payload
         }
    }
});

export const { setResponseStatus } = responseStatusSlice.actions;

export default responseStatusSlice.reducer;