import { css } from '@emotion/react';

const createStyles = (column: number) => ({
  board: () => css`
    display: grid;
    grid-template-columns: repeat(${column}, 1fr);
    gap: 1px;
  `
});

export { createStyles };
