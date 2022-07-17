/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { createStyles } from './Maze.style';
import { Board } from './view/components/Board/Board';

type Props = {};

const Maze: FC<Props> = () => {
  const styles = createStyles();
  const dispatch = useAppDispatch();

  return (
    <div css={styles.root}>
      <Board></Board>
    </div>
  );
};

export { Maze };
