import colors from './colors';
import fonts from './fonts';
import easings from './easings';
import media from './media';
import sizes from './sizes';

// Default: Dark theme
const dark = {
  primaryColor: colors.black,
  secondaryColor: colors.white,
};

// Light theme
const light = {
  primaryColor: colors.white,
  secondaryColor: colors.black,
};

const defaultEasing = 'ease';
const defaultDuration = '0.25s';

const shared = {
  easing: defaultEasing,
  duration: {
    default: defaultDuration,
  },
  transition: {
    default: `${defaultDuration} ${defaultEasing}`,
  },
  sizes,
};

const theme = {
  dark,
  light,
  ...shared,
};

export { colors, fonts, easings, media, sizes };
export default theme;
