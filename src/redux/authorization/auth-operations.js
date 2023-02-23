// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import API from 'services.js/API';

// axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
  
//     try {
//       const { data } = await API.post('auth/register', credentials);
//       localStorage.setItem('token_moms', data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await API.get('auth/logout');
//     localStorage.removeItem('token_moms');
//     localStorage.removeItem('persist:auth');
   
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.message);
//   }
// });

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await API.post('auth/login', credentials);
//       localStorage.setItem('token_moms', data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.message);
//     }
//   }
// );

// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await API.patch(`users/update`, credentials);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.message);
//     }
//   }
// );

// export const checkAuth = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`${API}auth/refresh`, {
//         withCredentials: true,
//       });
//       localStorage.setItem('token_moms', data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.message);
//     }
//   }
// );