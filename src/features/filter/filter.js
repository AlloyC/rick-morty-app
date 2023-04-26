import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender: '' ,
    species: '',
    status: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            return {...state, ...action.payload }
            
          }
    }
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;