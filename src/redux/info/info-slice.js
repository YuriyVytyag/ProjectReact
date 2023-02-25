import { createSlice } from '@reduxjs/toolkit';
import { addEatenProduct, deleteEatenProduct, getInfoForDay } from './info-operations';

const initialState = {
  dayId: '',
  date: null,
  eatenProducts: [],
  eatenProductId:'',
  daySummary: {},
  // dailyRate: '',
  // kcalConsumed: '',
  // kcalLeft: '',
  // percentsOfDailyRate: '',
};

const info = createSlice({
  name: 'day',
  initialState,
  reducers: {
    getSelectDate: (state, action) => {
      state.date = action.payload;
    },
    getSelectEatenProductId: (state, action) => {
      state.eatenProductId = action.payload;
    },
  },
  extraReducers:{
    [addEatenProduct.fulfilled](state, action){
      state.eatenProducts.push(action.payload);
    },
    [deleteEatenProduct.fulfilled](state, action){
      state.eatenProducts = state.eatenProducts.filter(
        product => product.id !== action.payload.productId
      );
    },
    [getInfoForDay.fulfilled](state, action){
      if (!action.payload.eatenProducts) {
        state.eatenProducts = [];
        return;
      }
      state.eatenProducts = [...action.payload.eatenProducts];
      state.daySummary = action.payload?.daySummary;
      state.dayId = action.payload?.id;
    }
  },
});

export const infoReducer = info.reducer;

export const { getSelectDate, getSelectEatenProductId } = info.actions;
