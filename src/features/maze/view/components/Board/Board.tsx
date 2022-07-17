/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { selectMaze } from 'src/features/maze/redux/selectors';
import { Ceil } from '../Ceil/Ceil';
import { createStyles } from './Board.style';
import { createIDsArray } from './utils/createIDsArray';

type Props = {};

const Board: FC<Props> = () => {
  const { row, column } = useAppSelector(selectMaze);
  const styles = createStyles(column);

  const ceils = createIDsArray({ row, column });
  return (
    <div css={styles.board}>
      {ceils.map((ceil) => (
        <Ceil ceilID={ceil} key={ceil.toString()}></Ceil>
      ))}
    </div>
  );
};
export type { Props };
export { Board };
