  import { configureStore } from '@reduxjs/toolkit'; 
import { combineReducers } from 'redux';
import { cpuDynamicReducer, 
  cpuStaticReducer, 
  gpuDynamicReducer, 
  gpuStaticReducer, 
  ramStaticReducer, 
  ramDynamicReducer, 
  hdStaticReducer,
  hdDynamicReducer,
  supportReducer
} from 'entities/index'; 

const rootReducer = combineReducers({ 
  gpuStatic: gpuStaticReducer,
  gpuDynamic: gpuDynamicReducer,
  cpuStatic: cpuStaticReducer,
  cpuDynamic: cpuDynamicReducer,
  ramStatic: ramStaticReducer,
  ramDymamic: ramDynamicReducer, 
  hdStatic: hdStaticReducer,
  hdDynamic: hdDynamicReducer,
  support: supportReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

