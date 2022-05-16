import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import authReducer from './authReducer';
import searchReducer from './products';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  products: searchReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export const persistor = persistStore(store);
export default store;