import { RequestStatus } from '../../../helpers/redux';

type State = {
  status: RequestStatus;
  error: string | null;
  startCeil: [number, number];
  finishCeil: [number, number];
  row: number;
  column: number;
};

export type { State };
