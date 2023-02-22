import { configureStore } from '@reduxjs/toolkit';
import { dailyRateReducer } from './dailyRate/dailyRate-slice';
import { dailyRateUserIdReducer } from './dailyDateUserId/dailyDateUserId-slice';
import { userReducer } from './user/user-slice';
import { authReducer } from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken', 'sid'],
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    daily: dailyRateReducer,dailyRateUserIdReducer,
    auth: persistReducer(persistConfig, authReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
