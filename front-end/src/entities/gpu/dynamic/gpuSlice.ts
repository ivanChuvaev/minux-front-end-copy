import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GpuDynamic } from './types';

interface GpuState {
  data: GpuDynamic[],
}

const initialState: GpuState = {
  data: [],
};

const gpuDynamicSlice = createSlice({
  name: 'gpuDinamic',
  initialState,
  reducers: {
    addGpusDynamic: (state, action: PayloadAction<GpuDynamic[]>) => {
      state.data = action.payload;
    }, 
  }
});

export const gpuDynamicAction = gpuDynamicSlice.actions;
export const gpuDynamicReducer = gpuDynamicSlice.reducer;