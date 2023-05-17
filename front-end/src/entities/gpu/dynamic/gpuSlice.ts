import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GpuDynamic } from './types';

interface GpuState {
  data: GpuDynamic[],
}

const initialState: GpuState = {
  data: [],
};

const gpuSlice = createSlice({
  name: 'gpuDinamic',
  initialState,
  reducers: {
    addGpus: (state, action: PayloadAction<GpuDynamic[]>) => {
      state.data = action.payload;
    }, 
  }
});

export const { addGpus } = gpuSlice.actions;
export default gpuSlice.reducer;