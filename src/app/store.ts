import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as mazeReducer } from '../features/maze';

export const store = configureStore({
  reducer: {
    maze: mazeReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
