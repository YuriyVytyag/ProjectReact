import { createSlice } from '@reduxjs/toolkit';
import { dailyRate } from './dailyRate-operations';

const initialState = {
  dailyRate: null,
  notAllowedProducts: [],
  error: null,
  isLoading: false,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(dailyRate.pending, state => {
        state.isLoading = true;
      })
      .addCase(dailyRate.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.dailyRate = payload.dailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
      })
      .addCase(dailyRate.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default dailyRateSlice.reducer;

