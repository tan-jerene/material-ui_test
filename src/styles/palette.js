// @flow weak

import { indigo, pink, grey, red, black, white } from './colors';
import { getContrastRatio } from './colorManipulator';

export const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)',
    lightDivider: 'rgba(0, 0, 0, 0.075)',
  },
  background: {
    default: grey[50],
    paper: white,
    appBar: grey[100],
    contentFrame: grey[200],
    status: grey[300],
  },
};

export const dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.70)',
    disabled: 'rgba(255, 255, 255, 0.50)',
    hint: 'rgba(255, 255, 255, 0.50)',
    icon: 'rgba(255, 255, 255, 0.50)',
    divider: 'rgba(255, 255, 255, 0.12)',
    lightDivider: 'rgba(255, 255, 255, 0.075)',
  },
  background: {
    default: '#303030',
    paper: grey[800],
    appBar: grey[900],
    contentFrame: grey[900],
    status: black,
  },
};

export const shades = { dark, light };

export default function createPalette({
  primary = indigo,
  accent = pink,
  error = red,
  type = 'light',
} = {}) {
  return {
    type,
    text: shades[type].text,
    background: shades[type].background,
    shades,
    primary,
    accent,
    error,
    grey,
    // functions
    getContrastText,
  };
}

export { createPalette };

function getContrastText(color) {
  if (getContrastRatio(color, black) < 7) {
    return dark.text.primary;
  }
  return light.text.primary;
}
