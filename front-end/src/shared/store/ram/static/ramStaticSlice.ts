import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RamStatic } from "./types"; 

interface RamStaticState {
    data: RamStatic[]
}

export const initialState: RamStaticState = {
    data: []
}

const RamStaticSlice = createSlice({
    name: 'ramStatic',
    initialState,
    reducers: {
        addRamsStatic: (state, action: PayloadAction<RamStatic[]>) => {
            state.data = action.payload
        }
    }
})

export const ramStaticAction = RamStaticSlice.actions;
export const ramStaticReducer = RamStaticSlice.reducer;