import { State } from './types';

const initialState: State = {
  startCeil: [1, 1],
  finishCeil: [1, 1],
  currentCeil: [1, 1],
  row: 3,
  column: 3,
  movesCount: 10,
  movesNumber: [],
  gameOver: false,
  shouldShowRight: false
};

export { initialState };
