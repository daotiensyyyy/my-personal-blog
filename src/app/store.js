import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore, persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage' // defaults to localStorage for web
import blogReducer from '../features/Blog/blogSlice';
import authReducer from '../features/Admin/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['blog', 'detail']
}

const reducers = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);