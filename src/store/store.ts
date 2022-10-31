import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import infoReducer from './slices/infoSlice';

const rootReducer = combineReducers({
  user: userReducer,
  data: infoReducer,
});

export const setStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore['dispatch'];
