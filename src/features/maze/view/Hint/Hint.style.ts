import { css } from '@emotion/react';

const createStyles = () => ({
  root: () => {
    const root = css`
      height: 40px;
      width: 40px;
      border-radius: 10px;
      border: 1px solid #003366;
    `;

    return root;
  }
});

export { createStyles };
