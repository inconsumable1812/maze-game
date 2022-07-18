import { css } from '@emotion/react';

const createStyles = () => ({
  root: () => {
    const root = css`
      display: flex;
      justify-content: center;
    `;

    return root;
  }
});

export { createStyles };
