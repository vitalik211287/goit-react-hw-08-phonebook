import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
      const { data } = await axios.post('/users/login', credentials);
       console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
      const { data } = await axios.post('/users/logout');
      console.log(data);
    token.unset();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
