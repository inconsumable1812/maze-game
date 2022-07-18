import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { createRandomStartCeil, findNextCeil } from './utils';

const slice = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    init(state) {
      const startCeil = createRandomStartCeil(state.row, state.column);
      state.startCeil = startCeil;
      state.movesNumber = [];
      state.currentCeil = startCeil;
      state.gameOver = false;
      state.shouldShowRight = false;
    },
    setNextCeil(state) {
      const nextCeil = findNextCeil({
        currentCeil: state.currentCeil,
        row: state.row,
        column: state.column
      });

      state.currentCeil = nextCeil.nextCeil;
      state.movesNumber.push(nextCeil.moveNumber);
    },
    setFinishCeil(state) {
      state.finishCeil = state.currentCeil;
    },
    setGameOver(state) {
      state.gameOver = true;
    },
    setShouldShowRight(state) {
      state.shouldShowRight = true;
    }
  },

  extraReducers: () => {}
});

const { reducer } = slice;

const { setNextCeil, init, setFinishCeil, setGameOver, setShouldShowRight } =
  slice.actions;

export {
  reducer,
  setNextCeil,
  init,
  setFinishCeil,
  setGameOver,
  setShouldShowRight
};
