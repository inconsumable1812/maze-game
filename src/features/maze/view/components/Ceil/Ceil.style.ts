import { css } from '@emotion/react';

const createStyles = () => ({
  root: () => css`
    min-height: 80px;
    min-width: 40px;
    border: 1px solid blue;

    @media (min-width: 768px) {
      min-height: 150px;
    }
  `
});

export { createStyles };
