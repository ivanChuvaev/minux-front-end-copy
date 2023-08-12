import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CpuDynamic } from "./types"; 

interface CpuDynamicState {
    data: CpuDynamic | null
}

export const initialState: CpuDynamicState = {
    data: null
}

const cpuDynamicSlice = createSlice({
    name: 'cpuDymaic',
    initialState,
    reducers: {
        addCpuDynamic: (state, action: PayloadAction<CpuDynamic>) => {
            state.data = action.payload
        }
    }
})

export const cpuDynamicAction = cpuDynamicSlice.actions;
export const cpuDynamicReducer = cpuDynamicSlice.reducer;