/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp
} from 'src/shared/components';
import { TO_BOTTOM, TO_LEFT, TO_RIGHT, TO_UP } from '../../redux/constants';
import { MoveNumber } from '../../redux/types';
import { createStyles } from './Hint.style';

type Props = {
  moveNumber: MoveNumber;
};

const Hint: FC<Props> = ({ moveNumber }) => {
  const styles = createStyles();

  switch (moveNumber) {
    case TO_UP:
      return (
        <div css={styles.root}>
          <ArrowUp></ArrowUp>
        </div>
      );
    case TO_RIGHT:
      return (
        <div css={styles.root}>
          <ArrowRight></ArrowRight>
        </div>
      );
    case TO_BOTTOM:
      return (
        <div css={styles.root}>
          <ArrowDown></ArrowDown>
        </div>
      );
    case TO_LEFT:
      return (
        <div css={styles.root}>
          <ArrowLeft></ArrowLeft>
        </div>
      );
    default:
      return <></>;
  }
};

export { Hint };
