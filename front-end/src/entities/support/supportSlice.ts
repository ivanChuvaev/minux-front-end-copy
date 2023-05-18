import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Support } from "./types"; 

interface SupportState {
    data: Support | null
}

export const initialState: SupportState = {
    data: null
}

const supportSlice = createSlice({
    name: 'support',
    initialState,
    reducers: {
        addRamsStatic: (state, action: PayloadAction<Support>) => {
            state.data = action.payload
        }
    }
})

export const supportAction = supportSlice.actions;
export const supportReducer = supportSlice.reducer;