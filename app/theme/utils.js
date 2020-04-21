import { css, keyframes } from 'styled-components';

// Mixins
// ====================
export const cover = css`
  width: 100%;
  height: 100%;
`;

export const absoluteCover = css`
  ${cover}
  position: absolute;
  top: 0;
  left: 0;
`;

export const tableCover = css`
  display: table;
  ${cover}
`;

export const clearFix = css`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const overflowScrollY = css`
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const noSelect = css`
  user-select: none;

  &:focus {
    outline: none;
  }
`;

export const backgroundCover = css`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const force3d = css`
  backface-visibility: hidden;
  perspective: 1000px;
`;

/**
 * Keyframes
 */

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;
