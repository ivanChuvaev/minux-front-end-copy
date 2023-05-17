import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CpuDynamic } from "./types";
import { stat } from "fs";

interface CpuState {
    data: CpuDynamic[]
}

export const initialState: CpuState = {
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