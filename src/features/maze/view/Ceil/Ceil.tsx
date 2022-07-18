/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { selectMaze } from 'src/features/maze/redux/selectors';
import { setGameOver, setShouldShowRight } from '../../redux/slice';
import { createStyles } from './Ceil.style';

type Props = {
  ceilID: [number, number];
};

const Ceil: FC<Props> = ({ ceilID }) => {
  const dispatch = useAppDispatch();
  const { startCeil, finishCeil, gameOver, shouldShowRight } =
    useAppSelector(selectMaze);

  const isStartCeil = startCeil.toString() === ceilID.toString();
  const isFinishCeil = finishCeil.toString() === ceilID.toString();

  const [isRightClick, setIsRightClick] = useState(false);
  const [isErrorClick, setIsErrorClick] = useState(false);

  useEffect(() => {
    if (gameOver === false) {
      setIsRightClick(false);
      setIsErrorClick(false);
    }
  }, [gameOver]);

  const styles = createStyles({
    isStartCeil,
    isRightClick,
    shouldShowRight,
    isErrorClick,
    isFinishCeil
  });

  const handleClick = () => {
    const isRightClick = ceilID.toString() === finishCeil.toString();

    if (isRightClick) {
      setIsRightClick(true);
    } else {
      setIsErrorClick(true);
      dispatch(setShouldShowRight());
    }

    dispatch(setGameOver());
  };

  return (
    <button disabled={gameOver} onClick={handleClick} css={styles.root}>
      {isStartCeil && !isRightClick && (
        <span css={styles.startText}>start</span>
      )}
      {isFinishCeil && shouldShowRight && (
        <span css={styles.showRightText}>Правильный ответ!</span>
      )}
      {isRightClick && <span css={styles.startText}>Правильно!</span>}
      {isErrorClick && <span css={styles.startText}>Ошибка!</span>}
    </button>
  );
};
export type { Props };
export { Ceil };
