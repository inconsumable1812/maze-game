import { TO_UP, TO_BOTTOM, TO_RIGHT, TO_LEFT } from './constants';

type State = {
  startCeil: [number, number];
  finishCeil: [number, number];
  currentCeil: [number, number];
  row: number;
  column: number;
  movesCount: number;
  movesNumber: MoveNumber[];
  gameOver: boolean;
  shouldShowRight: boolean;
};

type MoveNumber =
  | typeof TO_UP
  | typeof TO_BOTTOM
  | typeof TO_RIGHT
  | typeof TO_LEFT;

export type { State, MoveNumber };
