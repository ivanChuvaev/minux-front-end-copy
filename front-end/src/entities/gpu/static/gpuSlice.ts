import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GpuStatic } from './types';

interface GpuState {
  data: GpuStatic[],
};

const initialState: GpuState = {
  data: [],
};

const gpuSlice = createSlice({
  name: 'gpuStatic',
  initialState,
  reducers: {
    addGpus: (state, action: PayloadAction<GpuStatic[]>) => {
      state.data = action.payload;
    }, 
  }
});

export const { addGpus } = gpuSlice.actions;
export default gpuSlice.reducer;