import { TO_BOTTOM, TO_LEFT, TO_RIGHT, TO_UP } from '../constants';

type Args = {
  currentCeil: [number, number];
  maxRow: number;
  maxColumn: number;
};

const findExceptionMoves = ({ currentCeil, maxRow, maxColumn }: Args) => {
  const currentRow = currentCeil[0];
  const currentColumn = currentCeil[1];
  const exception: number[] = [];

  if (currentRow >= maxRow) {
    exception.push(TO_BOTTOM);
  } else if (currentRow <= 1) {
    exception.push(TO_UP);
  }

  if (currentColumn >= maxColumn) {
    exception.push(TO_RIGHT);
  } else if (currentColumn <= 1) {
    exception.push(TO_LEFT);
  }

  return exception;
};

export { findExceptionMoves };
