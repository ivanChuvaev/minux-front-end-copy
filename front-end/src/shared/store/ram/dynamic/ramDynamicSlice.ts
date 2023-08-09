import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RamDynamic } from "./types"; 

interface RamDynamicState {
    data: RamDynamic[]
}

export const initialState: RamDynamicState = {
    data: []
}

const RamDynamicSlice = createSlice({
    name: 'ramDynamic',
    initialState,
    reducers: {
        addRamsStatic: (state, action: PayloadAction<RamDynamic[]>) => {
            state.data = action.payload
        }
    }
})

export const ramDynamicAction = RamDynamicSlice.actions;
export const ramDynamicReducer = RamDynamicSlice.reducer;