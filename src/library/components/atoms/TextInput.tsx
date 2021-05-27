import React from 'react';
import {TextInput, StyleProp, ViewStyle} from 'react-native';
import * as Config from '@at/config';

interface DynamicTextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
  backgroundColor?: Config.Styles.COLORS;
  color?: Config.Styles.COLORS;
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  small?: boolean;
  lines?: number;
  autoCapitalize?: 'characters';
}

const Text: React.FunctionComponent<DynamicTextInputProps> = props => {
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      multiline={props.multiline}
      autoCorrect={false}
      numberOfLines={props.lines}
      autoCapitalize={props.autoCapitalize}
      style={[
        props.style,
        {
          backgroundColor: props.backgroundColor || Config.Styles.COLORS.WHITE,
          color: props.color || Config.Styles.COLORS.BLACK,
          fontSize: Config.Styles.MEASURE.FONT_SIZE.SMALL,
          minHeight: props.lines
            ? Config.Styles.MEASURE.FONT_SIZE.SMALL * props.lines * 1.5
            : undefined,
          borderRadius: Config.Styles.MEASURE.GUTTER / (props.small ? 4 : 2),
          paddingHorizontal: props.small
            ? 0
            : Config.Styles.MEASURE.GUTTER / (props.small ? 4 : 2),
          paddingVertical: props.small
            ? 0
            : Config.Styles.MEASURE.GUTTER / (props.small ? 4 : 3),
        },
      ]}
    />
  );
};

export default Text;
