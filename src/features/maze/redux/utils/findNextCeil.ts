import { TO_BOTTOM, TO_LEFT, TO_RIGHT, TO_UP } from '../constants';
import { findExceptionMoves } from './findExceptionMoves';
import { makeRandomValue } from './makeRandomValue';

type Args = {
  currentCeil: [number, number];
  row: number;
  column: number;
};

const findNextCeil = ({ currentCeil, row, column }: Args) => {
  const exception = findExceptionMoves({
    currentCeil,
    maxRow: row,
    maxColumn: column
  });
  const moveNumber = makeRandomValue({ exception });

  const nextCeil: [number, number] = [currentCeil[0], currentCeil[1]];

  switch (moveNumber) {
    case TO_UP:
      nextCeil[0] -= 1;
      break;
    case TO_RIGHT:
      nextCeil[1] += 1;
      break;
    case TO_BOTTOM:
      nextCeil[0] += 1;
      break;
    case TO_LEFT:
      nextCeil[1] -= 1;
      break;
    default:
      break;
  }

  return { nextCeil, moveNumber };
};

export { findNextCeil };
