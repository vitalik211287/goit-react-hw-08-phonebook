import { configureStore } from '@reduxjs/toolkit';
import  sliceReducer from "./slice/Slice"


export const store = configureStore({
  reducer: {contacts : sliceReducer},
});

