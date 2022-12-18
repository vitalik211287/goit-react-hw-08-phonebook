import { configureStore } from '@reduxjs/toolkit';
// import sliceReducer from 'redux/slice/Slice';
import { contactApi } from './slice/Slice';

export const store = configureStore({
  reducer:
    {  [contactApi.reducerPath] : contactApi.reducer ,},
   
    middleware: getDefaultMiddleware =>
        [...getDefaultMiddleware(), contactApi.middleware],
});
