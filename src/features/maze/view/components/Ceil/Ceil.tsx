/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { createStyles } from './Ceil.style';

type Props = {
  ceilID: number[];
  isStart?: boolean;
};

const Ceil: FC<Props> = ({ ceilID, isStart = false }) => {
  const styles = createStyles();

  const handleClick = (e: any) => {
    console.log(ceilID);
  };

  return (
    <div onClick={handleClick} css={styles.root}>
      {isStart && <p>start</p>}
      <p>{ceilID}</p>
    </div>
  );
};
export type { Props };
export { Ceil };
