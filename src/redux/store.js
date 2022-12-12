import { configureStore } from '@reduxjs/toolkit';
import  sliceReducer from "./slice/Slice"


export const store = configureStore({
  reducer: {contacts : sliceReducer},
});
//  export const persistor = persistStore(store);
