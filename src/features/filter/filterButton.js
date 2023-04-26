import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender: '' ,
    species: '',
    status: '',
}

export const filterButtonSlice = createSlice({
    name: 'filterButton',
    initialState,
    reducers: {
        setFilterButton: (state, action) => {
            return {...state, ...action.payload }
            
          }
    }
});

export const { setFilterButton } = filterButtonSlice.actions;

export default filterButtonSlice.reducer;