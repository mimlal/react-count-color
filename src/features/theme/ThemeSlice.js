import { createSlice } from "@reduxjs/toolkit";

const initialState={
    color:"",
}

export const ThemeSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
       changeTextColor:(state,action)=>{
          state.color = action.payload
        }
    }
})

export const {changeTextColor}=ThemeSlice.actions

export default ThemeSlice.reducer