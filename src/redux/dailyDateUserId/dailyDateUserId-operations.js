// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services.js/API';

export const dailyRateUserId = createAsyncThunk(
  'dailyRateUserId',
  async ( userData, thunkApi) => {
    const {id, data} = userData;
    try {
      const  res  = await API.dailyRateUserId(id, data);
      console.log(res.data);
      return res.data;
    } catch (err) {
      thunkApi.rejectWithValue();
    }
  }
);
