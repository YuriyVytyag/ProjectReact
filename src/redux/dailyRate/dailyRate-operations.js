import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const dailyRate = createAsyncThunk(
  'dailyRate/',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/daily-rate', credentials);
      // return data;
      console.log(data);
    } catch (err) {
      thunkApi.rejectWithValue();
      console.log(err);
    }
  }
);
