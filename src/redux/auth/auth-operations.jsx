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

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
     const {
       response: { status },
     } = error;
     return thunkAPI.rejectWithValue(status);
    }
  }
);
export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
   const {
     response: { status },
   } = error;
   return thunkAPI.rejectWithValue(status);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_,thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    const {
      response: { status },
    } = error;
    return thunkAPI.rejectWithValue(status);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
     const {data} = await axios.get('/users/current');
     return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
//  import axios from 'axios';
//  import { createAsyncThunk } from '@reduxjs/toolkit';

//  axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//  export const token = {
//    set(token) {
//      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//    },
//    unset() {
//      axios.defaults.headers.common.Authorization = '';
//    },
//  };

//  export const register = createAsyncThunk(
//    'auth/register',
//    async credentials => {
//      try {
//        const { data } = await axios.post('/users/signup', credentials);
//        token.set(data.token);
//        return data;
//      } catch (error) {
//        console.log(error.message);
//      }
//    }
//  );
//  export const logIn = createAsyncThunk('auth/login', async credentials => {
//    try {
//      const { data } = await axios.post('/users/login', credentials);
//      token.set(data.token);
//      return data;
//    } catch (error) {
//      console.log(error.message);
//    }
//  });

//  export const logOut = createAsyncThunk('auth/logout', async credentials => {
//    try {
//      const { data } = await axios.post('/users/logout');
//      token.unset();
//      return data;
//    } catch (error) {
//      console.log(error.message);
//    }
//  });

//  export const fetchCurrentUser = createAsyncThunk(
//    'auth/refresh',
//    async (_, thunkAPI) => {
//      const state = thunkAPI.getState();
//      console.log(thunkAPI.getState());
//      const persistedToken = state.auth.token;

//      if (!persistedToken) {
//        return thunkAPI.rejectWithValue();
//      }

//      token.set(persistedToken);

//      try {
//        const { data } = await axios.get('/users/current');
//        return data;
//      } catch (error) {
//        return thunkAPI.rejectWithValue();
//      }
//    }
//  );