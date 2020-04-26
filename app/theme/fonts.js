import { css } from 'styled-components';

const fonts = {
  default: {
    regular: () => css`
      font-family: 'Quicksand', sans-serif;
    `,
    light: () => css`
      font-family: 'Quicksand', sans-serif;
      font-weight: 300;
    `,
  },
  headline: {
    regular: () => css`
      font-family: 'Lexend Giga', sans-serif;
    `,
  },
};

export default fonts;
