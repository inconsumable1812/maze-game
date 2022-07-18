/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { selectMaze } from 'src/features/maze/redux/selectors';
import { Hint } from '../Hint/Hint';
import { createStyles } from './HintContainer.style';

type Props = {};

const HintContainer: FC<Props> = () => {
  const { movesNumber } = useAppSelector(selectMaze);
  const styles = createStyles();

  return (
    <div css={styles.root}>
      {movesNumber.map((number, i) => (
        <Hint key={i} moveNumber={number}></Hint>
      ))}
    </div>
  );
};

export { HintContainer };
