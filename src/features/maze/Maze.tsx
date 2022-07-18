/** @jsxImportSource @emotion/react */
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { createStyles } from './Maze.style';
import { selectMaze } from './redux/selectors';
import { init, setFinishCeil, setNextCeil } from './redux/slice';
import { Board } from './view/Board/Board';
import { HintContainer } from './view/HintContainer/HintContainer';

type Props = {};

const Maze: FC<Props> = () => {
  const { movesCount, gameOver, shouldShowRight } = useAppSelector(selectMaze);
  const styles = createStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
    for (let index = 0; index < movesCount; index++) {
      dispatch(setNextCeil());
    }
    dispatch(setFinishCeil());
  }, [dispatch, movesCount]);

  const handleButtonClick = () => {
    dispatch(init());
    for (let index = 0; index < movesCount; index++) {
      dispatch(setNextCeil());
    }
    dispatch(setFinishCeil());
  };

  return (
    <div css={styles.root}>
      <Board></Board>
      <div css={styles.hints}>
        <HintContainer></HintContainer>
      </div>

      {gameOver && (
        <div>
          {gameOver && !shouldShowRight && (
            <p>Поздравляем Вы правильно ответили</p>
          )}
          {gameOver && shouldShowRight && <p>Вы ошиблись</p>}
          <button onClick={handleButtonClick}>Попробовать ещё</button>
        </div>
      )}
    </div>
  );
};

export { Maze };
