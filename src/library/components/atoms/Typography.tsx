import React from 'react';
import {Text} from 'react-native';
import * as Config from '@at/config';

interface TypographyProps {
  color?: Config.Styles.COLORS;
  align?: 'left' | 'center' | 'right';
  muted?: boolean;
  bold?: boolean;
  sentenceCase?: boolean;
  maxLines?: number;
  footNote?: boolean;
  ellipsizeMode?: 'tail' | 'head';
}

const Heading: React.FunctionComponent<TypographyProps> = props => (
  <Text
    maxFontSizeMultiplier={1}
    style={{
      fontSize: Config.Styles.MEASURE.FONT_SIZE.XLARGE,
      color: props.color || Config.Styles.COLORS.BLACK,
      lineHeight: Config.Styles.MEASURE.FONT_SIZE.XLARGE,
      fontWeight: 'bold',
      textAlign: props.align,
      opacity: props.muted ? 0.75 : 1,
      textTransform: props.sentenceCase ? 'capitalize' : undefined,
    }}
    numberOfLines={props.maxLines}
    ellipsizeMode={props.ellipsizeMode}>
    {props.children}
  </Text>
);

Heading.defaultProps = {
  align: 'left',
};

const SubHeading: React.FunctionComponent<TypographyProps> = props => (
  <Text
    maxFontSizeMultiplier={1}
    style={{
      fontSize: Config.Styles.MEASURE.FONT_SIZE.LARGE,
      color: props.color || Config.Styles.COLORS.BLACK,
      lineHeight: Config.Styles.MEASURE.FONT_SIZE.LARGE,
      textAlign: props.align,
      opacity: props.muted ? 0.75 : 1,
      textTransform: props.sentenceCase ? 'capitalize' : undefined,
    }}
    numberOfLines={props.maxLines}
    ellipsizeMode={props.ellipsizeMode}>
    {props.children}
  </Text>
);

SubHeading.defaultProps = {
  align: 'left',
};

const Medium: React.FunctionComponent<TypographyProps> = props => (
  <Text
    maxFontSizeMultiplier={1}
    style={{
      fontSize: Config.Styles.MEASURE.FONT_SIZE.MEDIUM,
      color: props.color || Config.Styles.COLORS.BLACK,
      lineHeight: Config.Styles.MEASURE.FONT_SIZE.MEDIUM,
      textAlign: props.align,
      fontWeight: 'bold',
      opacity: props.muted ? 0.75 : 1,
      textTransform: props.sentenceCase ? 'capitalize' : undefined,
    }}
    numberOfLines={props.maxLines}
    ellipsizeMode={props.ellipsizeMode}>
    {props.children}
  </Text>
);

Medium.defaultProps = {
  align: 'left',
};

const Regular: React.FunctionComponent<TypographyProps> = props => (
  <Text
    maxFontSizeMultiplier={1}
    style={{
      fontSize: Config.Styles.MEASURE.FONT_SIZE.REGULAR,
      color: props.color || Config.Styles.COLORS.BLACK,
      lineHeight: Config.Styles.MEASURE.FONT_SIZE.REGULAR,
      textAlign: props.align,
      opacity: props.muted ? 0.75 : 1,
      fontWeight: props.bold ? 'bold' : undefined,
    }}
    numberOfLines={props.maxLines}
    ellipsizeMode={props.ellipsizeMode}>
    {props.children}
  </Text>
);

Regular.defaultProps = {
  align: 'left',
};

const Small: React.FunctionComponent<TypographyProps> = props => (
  <Text
    maxFontSizeMultiplier={1}
    numberOfLines={props.maxLines}
    style={{
      fontSize:
        Config.Styles.MEASURE.FONT_SIZE.SMALL * (props.footNote ? 0.75 : 1),
      color: props.color || Config.Styles.COLORS.BLACK,
      lineHeight:
        Config.Styles.MEASURE.FONT_SIZE.SMALL * (props.footNote ? 0.75 : 1),
      textAlign: props.align,
      opacity: props.muted ? 0.75 : 1,
      fontWeight: props.bold ? 'bold' : 'normal',
    }}
    ellipsizeMode={props.ellipsizeMode}>
    {props.children}
  </Text>
);

Small.defaultProps = {
  align: 'left',
};

export {Heading, SubHeading, Medium, Regular, Small};
