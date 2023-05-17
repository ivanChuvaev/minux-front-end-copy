import { configureStore } from '@reduxjs/toolkit'; 
import { gpuReducers, cpuReducers, ramReducers, hdReducers} from 'entities' 


const rootReducer = { 
  ...gpuReducers,
  ...cpuReducers,
  ...ramReducers,
  ...hdReducers
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
