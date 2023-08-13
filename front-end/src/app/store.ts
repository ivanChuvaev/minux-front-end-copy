import { configureStore } from '@reduxjs/toolkit'; 
import { combineReducers } from 'redux';
import { 
  supportReducer
} from 'shared/store/index'; 
import { dynamicDataReducer, staticDataReducer } from 'shared/store/storeData';

const rootReducer = combineReducers({ 
  dynamicData: dynamicDataReducer,
  staticData: staticDataReducer,
  support: supportReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
