import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GpuDynamic } from './types';

interface GpuDynamicState {
  data: GpuDynamic[],
}

const initialState: GpuDynamicState = {
  data: [],
};

const gpuDynamicSlice = createSlice({
  name: 'gpuDinamic',
  initialState,
  reducers: {
    addGpuDynamic: (state, action: PayloadAction<GpuDynamic[]>) => {
      state.data = action.payload;
    }, 
  }
});

export const gpuDynamicAction = gpuDynamicSlice.actions;
export const gpuDynamicReducer = gpuDynamicSlice.reducer;