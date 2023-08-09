import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  {StaticData} from "./staticData"; 

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
        }
    }
})

export const staticDataAction = staticDataSlice.actions;
export const staticDataReducer = staticDataSlice.reducer;