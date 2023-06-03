import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CpuDynamic } from "../../../shared/types/cpuDynamic"; 

interface CpuDynamicState {
    data: CpuDynamic[]
}

export const initialState: CpuDynamicState = {
    data: []
}

const cpuDynamicSlice = createSlice({
    name: 'cpuDymaic',
    initialState,
    reducers: {
        addCpuDynamic: (state, action: PayloadAction<CpuDynamic[]>) => {
            state.data = action.payload
        }
    }
})

export const cpuDynamicAction = cpuDynamicSlice.actions;
export const cpuDynamicReducer = cpuDynamicSlice.reducer;