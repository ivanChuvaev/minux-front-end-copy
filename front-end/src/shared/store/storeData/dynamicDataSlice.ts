import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GpuDynamic } from "../gpu";
import  {DynamicData} from "./dynamicData";
import { CpuDynamic } from "../cpu";
import { RamDynamic } from "../ram";
import { HdDynamic } from "../hd";
import { CalculationsDynamic } from "../calculations";

interface DynamicDataState {
    data: DynamicData 
}

export const initialState: Partial<DynamicDataState> = { }

const dynamicDataSlice = createSlice({
    name: 'dynamicData',
    initialState,
    reducers: {
        updateDynamicData: (state, action: PayloadAction<DynamicData>) => {
            state.data = action.payload;
        },
        changeStateDynamic: (state, action: PayloadAction<boolean>) => {
            if (state.data) {
                state.data.state.mining = action.payload; 
            }
        },
        changeGpusDynamic: (state, action: PayloadAction<GpuDynamic[]>) => {
            if (state.data) {
                state.data.gpu = action.payload; 
            }
        },
        changeCpuDynamic: (state, action: PayloadAction<CpuDynamic>) => {
            if (state.data) {
                state.data.cpu = action.payload; 
            }
        },
        changeRamsDynamic: (state, action: PayloadAction<RamDynamic[]>) => {
            if (state.data) {
                state.data.ram = action.payload; 
            }
        },
        changeHdDynamic: (state, action: PayloadAction<HdDynamic>) => {
            if (state.data) {
                state.data.hd = action.payload; 
            }
        },
        changeCalculationsDynamic: (state, action: PayloadAction<CalculationsDynamic>) => {
            if (state.data) {
                state.data.calculations = action.payload; 
            }
        },
    }
})

export const dynamicDataAction = dynamicDataSlice.actions;
export const dynamicDataReducer = dynamicDataSlice.reducer;