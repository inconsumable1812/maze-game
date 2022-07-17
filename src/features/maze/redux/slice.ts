import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const slice = createSlice({
  name: 'maze',
  initialState,
  reducers: {},

  extraReducers: () => {}
});

const { reducer } = slice;

export { reducer };
