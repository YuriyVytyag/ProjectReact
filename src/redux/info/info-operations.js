import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services.js/API';
import { token } from 'redux/auth/auth-operations';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const infoUser = createAsyncThunk('infoUser', async (date, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const { data } = await API.getInfoForDay(date);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue();
  }
});


// Post an eaten product

export const addEatenProduct = createAsyncThunk(
  'day/addEatenProduct',
  async (productData, thunkAPI) => {
    try {
    //   const newDate = { ...params, date: normalizedDate(params.date) };
      const response = await axios.post('/day', productData);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//  Delete eaten product

export const deleteEatenProduct = createAsyncThunk(
  'day/deleteEatenProduct',
  async (deleteData, thunkAPI) => {
    try {
      const response = await axios.delete('/day', { data: {...deleteData}});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//   Get info for day

export const getInfoForDay = createAsyncThunk(
  'day/getInfoForDay',
  async (date, thunkAPI) => {
    try {
      const response = await axios.post('/day/info', date);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

