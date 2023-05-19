import { configureStore } from '@reduxjs/toolkit'; 
import { gpuReducers, 
  cpuReducers, 
  ramReducers, 
  hdReducers, 
  supportReducer
} from 'entities/index' 

const rootReducer = { 
  ...gpuReducers,
  ...cpuReducers,
  ...ramReducers,
  ...hdReducers,
  supportReducer
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
