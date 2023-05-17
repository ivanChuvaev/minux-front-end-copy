import { configureStore } from '@reduxjs/toolkit'; 
import { gpuDynamicReducer, gpuStaticReducer } from 'entities/gpu' 
import { cpuDynamicReducer, cpuStaticReducer } from 'entities/cpu' 

const rootReducer = { 
  gpuDynamicReducer,
  gpuStaticReducer,
  cpuDynamicReducer,
  cpuStaticReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
