import type { RootState } from 'src/app/store';

const selectMaze = (state: RootState) => state.maze;

export { selectMaze };
