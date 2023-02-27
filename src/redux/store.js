import { configureStore } from '@reduxjs/toolkit';
import dailyRateReducer  from './dailyRate/dailyRate-slice';
import { dailyRateUserIdReducer } from './dailyDateUserId/dailyDateUserId-slice';
import { userReducer } from './user/user-slice';
import { authReducer } from './auth/auth-slice';
import { infoReducer } from './info/info-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken', 'sid'],
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    daily: dailyRateReducer,
    dailyRate: dailyRateUserIdReducer,
    dayInfo: infoReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

