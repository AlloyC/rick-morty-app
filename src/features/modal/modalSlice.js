import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender: '',
    species: '',
    status: '',
    name: '',
    image: '',
    id: 0,
    state: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            return { ...action.payload }
          }
    }
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;