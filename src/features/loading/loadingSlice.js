import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        value: ''
    },
    reducers: {
        setLoading: (state, action) => {
           state.value = action.payload
         }
    }
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;