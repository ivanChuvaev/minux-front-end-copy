import { configureStore } from '@reduxjs/toolkit'; 
import gpuDynamicReducer from 'entities/gpu/dynamic/gpuSlice'
import gpuStaticReducer from 'entities/gpu/static/gpuSlice'

const rootReducer = { 
  gpuDynamicReducer,
  gpuStaticReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
