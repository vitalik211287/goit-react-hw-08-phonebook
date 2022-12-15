import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from "./slice/Slice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, sliceReducer);
// const sliceReducer = persistReducer(persistConfig,);


export const store = configureStore({
  reducer: { contacts: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


// export const store = configureStore({
//   reducer: {contacts : sliceReducer},
// });

export const persistor = persistStore(store)