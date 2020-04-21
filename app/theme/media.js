import { css } from 'styled-components';
import sizes from './sizes';

const media = {
  large: (...args) => css`
    @media (min-width: ${sizes.mediumMaxWidth + 1}px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: ${sizes.mediumMaxWidth}px) {
      ${css(...args)}
    }
  `,
  small: (...args) => css`
    @media (max-width: ${sizes.smallMaxWidth}px) {
      ${css(...args)}
    }
  `,
  notSmall: (...args) => css`
    @media (min-width: ${sizes.smallMaxWidth + 1}px) {
      ${css(...args)}
    }
  `,
  searchCardWide: (...args) => css`
    @media (min-width: ${sizes.searchCardsMax}px) {
      ${css(...args)}
    }
  `,
  notSearchCardWide: (...args) => css`
    @media (max-width: ${sizes.searchCardsMax - 1}px) {
      ${css(...args)}
    }
  `,
  mediumHeight: (...args) => css`
    @media (max-height: ${sizes.mediumMaxHeight}px) {
      ${css(...args)}
    }
  `,
};

export default media;
