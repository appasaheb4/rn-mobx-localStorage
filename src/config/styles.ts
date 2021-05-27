import {Scaler} from '@at/library/utils/display';
import {Dimensions} from 'react-native';

/**
 * ENUM for COLORS
 * Add any new color to this enum before
 * using it in the app
 */
export enum COLORS {
  PRIMARY = '#454CBF',
  SECONDARY = '#C57C85',
  ACCENT = '#422a68',
  BLACK = '#000000',
  GREY_0 = '#4A4A4A',
  GREY_1 = '#707070',
  LIGHT_1 = '#EBEBEB',
  WHITE = '#FFFFFF',
  BACKGROUND = '#FFFFFF',
  GOOGLE = '#CB3F31',
  FACEBOOK = '#375795',
  SUPPRESSED = '#4650BD',
  RED = '#FF0000',
  YELLOW = '#F7F351',
  BLUE = '#0000FF',
  TEXTCOLORGREY = '#6C6C6C',
  BORDERCOLOR = '#E3E3E3',
  SHADOWBLUE = '#DDECF5',
  PicaDay = '#1BC47D',
  BACKGROUND1 = '#3F4957',
}

const DOCUMENT_WIDTH = 380;
const scaler = new Scaler(DOCUMENT_WIDTH);

export const MEASURE = {
  GUTTER: scaler.getScaledValue(10),
  FONT_SIZE: {
    SMALL: scaler.getScaledValue(7),
    REGULAR: scaler.getScaledValue(8),
    MEDIUM: scaler.getScaledValue(10),
    LARGE: scaler.getScaledValue(14),
    XLARGE: scaler.getScaledValue(18),
  },
  SCALER: scaler,
  WINDOW: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
};
