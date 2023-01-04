// import { fabClasses } from "@mui/material";
import { createSlice } from '@reduxjs/toolkit';
import { createContact, getUser} from './contacts-operation';

const initialState = {
contacts: [],
   filter: '',
   isLoading: false,
   isRefreshing: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [createContact.fulfilled](state, { payload }) {
      state.contacts.push(payload);
    },

    [getUser.fulfilled](state, { payload }) {
      state.contacts = payload;
    },
  },
});

export default contactsSlice.reducer;
