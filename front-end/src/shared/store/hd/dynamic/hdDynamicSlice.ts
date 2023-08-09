import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HdDynamic } from "./types"; 

interface HdDynamicState {
    data: HdDynamic[]
}

export const initialState: HdDynamicState = {
    data: []
}

const hdDynamicSlice = createSlice({
    name: 'hdDynamic',
    initialState,
    reducers: {
        addHdsDynamic: (state, action: PayloadAction<HdDynamic[]>) => {
            state.data = action.payload
        }
    }
})

export const hdDynamicAction = hdDynamicSlice.actions;
export const hdDynamicReducer = hdDynamicSlice.reducer;