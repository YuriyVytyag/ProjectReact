import { createSlice } from '@reduxjs/toolkit';
import {register, login, logout, refreshUser} from './auth-operations';
import { fetchStatus } from 'redux/fetchStatus';

const initialState = {
  isAuth: false,
  token: null,
  refreshToken: '',
  sid: '',
  status: fetchStatus.idle,
  isLoading: false,
  error: '',
  user: {
    userName: '',
    email: '',
    id:'',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, _) => {
        state.status = fetchStatus.pending;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = fetchStatus.fullfield;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.user = { ...action.payload.user };
        state.isAuth = true;
        state.error = '';
      })
      .addCase(register.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
        state.token = null;
      })
      .addCase(login.pending, (state, _) => {
        state.status = fetchStatus.pending;
        state.isLoading= true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = fetchStatus.fullfield;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.user = { ...action.payload.user };
        state.isAuth = true;
        state.isLoading= false;
        state.error = '';
      })
      .addCase(login.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
        state.token = null;
        state.refreshToken = '';
        state.isLoading= false;
      })
      .addCase(logout.pending, (state, _) => {
        state.status = fetchStatus.pending;
      })
      .addCase(logout.fulfilled, (state, _) => {
        state.status = fetchStatus.fullfield;
        state.token = '';
        state.refreshToken = '';
        state.sid = '';
        state.isAuth = false;
        state.user = {};
        state.error = '';
      })
      .addCase(logout.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
        state.token = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isFetched = false;
        state.error = '';
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.sid;
        state.error = '';

        state.isAuth = true;
        state.isFetched = true;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.isFetched = false;
      });
  },
});

export const authReducer = authSlice.reducer;