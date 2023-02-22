// import { configureStore } from '@reduxjs/toolkit';
// // import { dailyRateReducer } from './dailyRate/dailyRate-slice';
// import { dailyRateUserIdReducer } from './dailyDateUserId/dailyDateUserId-slice';
// import { userReducer } from './user/user-slice';
// import { authReducer } from './auth/auth-slice';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const authConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token', 'refreshToken', 'sid'],
// };

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     daily: dailyRateUserIdReducer,
//     auth: persistReducer(authConfig, authReducer), // логін реєстрація розлогі, рефреш, юзер інфо
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice'; 
import { userReducer } from './user/user-slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { dailyRateReducer } from './dailyRate/dailyRate-slice';
import { dailyRateUserIdReducer } from './dailyDateUserId/dailyDateUserId-slice';
import { infoReducer } from './info/info-slice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    dailyRate: dailyRateReducer,
    dailyRateUserId: dailyRateUserIdReducer,
    infoUser: infoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);