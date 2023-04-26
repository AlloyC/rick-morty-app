import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: 'characters',
    initialState: [],
    reducers: {

        setCharacters: ( state, action ) => {
            return action.payload
        },
        increaseCharacters: ( state, action ) => {
            state.push( ...action.payload )

        }
    }
    
})

export const { setCharacters, increaseCharacters } = characterSlice.actions

export default characterSlice.reducer