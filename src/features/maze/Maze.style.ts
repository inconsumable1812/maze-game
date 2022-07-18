import { css } from '@emotion/react';

const createStyles = () => ({
  root: () => css`
    max-width: 1224px;
    padding: 10px 12px;
    margin: 0 auto;
  `,
  hints: () => css`
    margin: 12px 0;
  `
});

export { createStyles };
