import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  {StaticData} from "./staticData"; 
import { Support } from "../support";
import { GpuStatic } from "../gpu";
import { CpuStatic } from "../cpu";
import { RamStatic } from "../ram";
import { motherboardStatic } from "../motherboard/types";
import { HdStatic } from "../hd";

interface StaticDataState {
    data: StaticData
}

export const initialState: Partial<StaticDataState> = { }

const staticDataSlice = createSlice({
    name: 'staticData',
    initialState,
    reducers: {
        updateStaticData: (state, action: PayloadAction<StaticData>) => {
            state.data = action.payload
        },
        changeGpuStatic: (state, action: PayloadAction<GpuStatic[]>) => {
            if (state.data) {
                state.data.gpu = action.payload; 
            }
        },
        changeCpuStatic: (state, action: PayloadAction<CpuStatic>) => {
            if (state.data) {
                state.data.cpu = action.payload; 
            }
        },
        changeRamStatic: (state, action: PayloadAction<RamStatic[]>) => {
            if (state.data) {
                state.data.ram = action.payload; 
            }
        },
        changeMotherboardStatic: (state, action: PayloadAction<motherboardStatic>) => {
            if (state.data) {
                state.data.motherboard = action.payload; 
            }
        },
        changeHdStatic: (state, action: PayloadAction<HdStatic>) => {
            if (state.data) {
                state.data.hd = action.payload; 
            }
        },
        changeCalculationsStatic: (state, action: PayloadAction<Support>) => {
            if (state.data) {
                state.data.support = action.payload; 
            }
        },
        changeSupportStatic: (state, action: PayloadAction<Support>) => {
            if (state.data) {
                state.data.support = action.payload; 
            }
        },
    } 
})

export const staticDataAction = staticDataSlice.actions;
export const staticDataReducer = staticDataSlice.reducer;