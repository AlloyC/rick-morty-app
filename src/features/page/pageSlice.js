import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        value: 1
    },
    reducers: {
        addPage: (state, action) => {
           state.value += 1 
         },
         setPage: (state, action) => {
            state.value = action.payload
         }
    }
});

export const { addPage, setPage } = pageSlice.actions;

export default pageSlice.reducer;