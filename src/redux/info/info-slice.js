import { createSlice } from '@reduxjs/toolkit';
import {
  addEatenProduct,
  deleteEatenProduct,
  getInfoForDay,
} from './info-operations';

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const initialState = {
  dayId: '',
  date: null,
  eatenProducts: [],
  daySummary: {},
  error: null,
};

const info = createSlice({
  name: 'day',
  initialState,
  reducers: {
    getSelectDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers: {
    [addEatenProduct.fulfilled](state, action) {
      state.eatenProducts.push(action.payload.eatenProduct);
      state.error = null;
    },
    [addEatenProduct.rejected]: handleRejected,
    [deleteEatenProduct.fulfilled](state, action) {
      const index = state.eatenProducts.findIndex(
        eatenProduct => eatenProduct.id === action.payload.id
      );
      state.eatenProducts.splice(index, 1);
      state.error = null;
    },
    [deleteEatenProduct.rejected]: handleRejected,
    [getInfoForDay.fulfilled](state, action) {
      if (!action.payload.eatenProducts) {
        state.eatenProducts = [];
        return;
      }
      state.eatenProducts = [...action.payload.eatenProducts];
      state.daySummary = action.payload?.daySummary;
      state.dayId = action.payload?.id;
      state.error = null;
    },
    [getInfoForDay.rejected]: handleRejected,
  },
});

export const infoReducer = info.reducer;

export const { getSelectDate } = info.actions;
