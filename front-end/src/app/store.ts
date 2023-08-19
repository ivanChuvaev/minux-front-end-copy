import { configureStore } from '@reduxjs/toolkit'; 
import { combineReducers } from 'redux';
import { 
  dynamicDataReducer, 
  staticDataReducer
} from 'shared/store/index'; 

const rootReducer = combineReducers({ 
  dynamicData: dynamicDataReducer,
  staticData: staticDataReducer, 
  
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
