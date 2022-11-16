import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import themeReducer from './slice/theme-slice'

export const store = configureStore({
  reducer: {
    themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
