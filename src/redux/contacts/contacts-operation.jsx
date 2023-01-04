import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const createContact = createAsyncThunk(
  'auth/createcontact',
  async newContact => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      console.log(data);
      //   token.unset();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const getUser = createAsyncThunk('auth/getuser', async() => {
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    // token.unset();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
