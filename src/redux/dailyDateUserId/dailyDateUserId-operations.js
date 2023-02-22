// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services.js/API';

export const dailyRateUserId = createAsyncThunk(
  'dailyRateUserId',
  async (userData, thunkApi) => {
    try {
      const { data } = await API.dailyRateUserId(userData);
      return data;
    } catch (err) {
      thunkApi.rejectWithValue();
      console.log(err);
    }
  }
);
