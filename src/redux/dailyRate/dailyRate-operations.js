import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const dailyRate = createAsyncThunk(
  'dailyRate/',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/daily-rate', credentials);
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
