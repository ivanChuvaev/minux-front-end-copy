import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GpuStatic } from './types';

interface GpuState {
  data: GpuStatic[],
};

const initialState: GpuState = {
  data: [],
};

const gpuStaticSlice = createSlice({
  name: 'gpuStatic',
  initialState,
  reducers: {
    addGpusStatic: (state, action: PayloadAction<GpuStatic[]>) => {
      state.data = action.payload;
    }, 
  }
});

export const gpuStaticAction = gpuStaticSlice.actions;
export const gpuStaticReducer =  gpuStaticSlice.reducer;