import { configureStore } from '@reduxjs/toolkit';
// import sliceReducer from 'redux/slice/Slice';
import { contactApi } from './slice/Slice';
import authSlice from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './contacts/contacts-slice';

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


const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    auth: persistReducer(persistConfig, authSlice),
    contacts: persistReducer(persistConfig, contactsSlice),
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
