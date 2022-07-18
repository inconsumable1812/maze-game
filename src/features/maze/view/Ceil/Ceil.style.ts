import { css } from '@emotion/react';

type Props = {
  isStartCeil: boolean;
  isRightClick: boolean;
  shouldShowRight: boolean;
  isErrorClick: boolean;
  isFinishCeil: boolean;
};

const createStyles = ({
  isStartCeil,
  isRightClick,
  isErrorClick,
  shouldShowRight,
  isFinishCeil
}: Props) => ({
  root: () => {
    let background = css`
      background-color: #00bfff;
    `;

    if (isStartCeil) {
      background = css`
        background-color: blue;
      `;
    }

    if (isRightClick) {
      background = css`
        background-color: green;
      `;
    }

    if (isErrorClick) {
      background = css`
        background-color: red;
      `;
    }

    if (shouldShowRight && isFinishCeil) {
      background = css`
        background-color: #56ff29;
      `;
    }

    const root = css`
      border: none;
      cursor: pointer;
      min-height: 80px;
      min-width: 40px;
      border-radius: 10px;
      ${background}

      @media (min-width: 768px) {
        min-height: 150px;
      }
    `;

    return root;
  },
  startText: () => css`
    display: block;
    margin: 5px 0;
    color: white;
    text-transform: uppercase;
  `,
  showRightText: () => css`
    display: block;
    margin: 5px 0;
    color: black;
    text-transform: uppercase;
  `
});

export { createStyles };
