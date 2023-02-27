import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// Post an eaten product

export const addEatenProduct = createAsyncThunk(
  'day/addEatenProduct',
  async (productData, thunkAPI) => {
    try {
      const { data } = await axios.post('/day', productData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//  Delete eaten product

export const deleteEatenProduct = createAsyncThunk(
  'day/deleteEatenProduct',
  async (deleteProduct, thunkAPI) => {
    try {
      const { data } = await axios.delete('/day', {
        data: { ...deleteProduct },
      });
      return data;
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
      const { data } = await axios.post('/day/info', date);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
