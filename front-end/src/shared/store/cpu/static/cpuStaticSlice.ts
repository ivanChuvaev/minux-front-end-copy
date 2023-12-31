import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CpuStatic } from "./types";

interface CpuStaticState {
    data: CpuStatic | null
};

const initialState: CpuStaticState = {
    data: null
};

const cpuStaticSlice = createSlice({
    name: 'cpuStatic',
    initialState,
    reducers: {
        addCpusStatic: (state, action: PayloadAction<CpuStatic>) => {
            state.data = action.payload
        }
    }
});

export const cpuStaticAction = cpuStaticSlice.actions;
export const cpuStaticReducer = cpuStaticSlice.reducer; 