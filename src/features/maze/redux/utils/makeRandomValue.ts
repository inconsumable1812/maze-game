import { MoveNumber } from '../types';

type Args = {
  exception: number[];
  min?: number;
  max?: number;
};

const makeRandomValue = ({ exception, min = 1, max = 4 }: Args) => {
  let moveNumber: MoveNumber | null = null;

  if (exception.length === 0) {
    moveNumber = (Math.floor(Math.random() * (max - min + 1)) +
      min) as MoveNumber;

    return moveNumber;
  }

  while (true) {
    moveNumber = (Math.floor(Math.random() * (max - min + 1)) +
      min) as MoveNumber;
    if (exception.indexOf(moveNumber) < 0) {
      return moveNumber;
    }
  }
};

export { makeRandomValue };
