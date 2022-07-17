import { State } from './types';

const initialState: State = {
  status: 'idle',
  error: null,
  startCeil: [1, 1],
  finishCeil: [1, 1],
  row: 3,
  column: 3
};

export { initialState };
