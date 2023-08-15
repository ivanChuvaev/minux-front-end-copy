import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HdStatic } from "./types"; 

interface HdStaticState {
    data: HdStatic
}

export const initialState: Partial<HdStaticState> = {}

const hdStaticSlice = createSlice({
    name: 'hdStatic',
    initialState,
    reducers: {
        addHdsStatic: (state, action: PayloadAction<HdStatic>) => {
            state.data = action.payload
        }
    }
})

export const hdStaticAction = hdStaticSlice.actions;
export const hdStaticReducer = hdStaticSlice.reducer;