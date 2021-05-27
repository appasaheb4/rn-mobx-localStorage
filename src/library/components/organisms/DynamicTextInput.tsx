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
  defaultHeight?: number;
}

const DynamicTextInput: React.FunctionComponent<DynamicTextInputProps> = props => {
  const [height, setHeight] = React.useState<number>(
    props.defaultHeight || (props.small ? 24 : 52),
  );

  React.useEffect(() => {
    if (!props.value) {
      setHeight(props.small ? 24 : 52);
    }
  }, [props.value]);
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      multiline={props.multiline}
      onContentSizeChange={event => {
        setHeight(event.nativeEvent.contentSize.height);
      }}
      autoCorrect={false}
      style={[
        props.style,
        {
          backgroundColor: props.backgroundColor || Config.Styles.COLORS.WHITE,
          color: props.color || Config.Styles.COLORS.BLACK,
          fontSize: Config.Styles.MEASURE.FONT_SIZE.SMALL,
          flexGrow: 1,
          flexShrink: 1,
          borderRadius: Config.Styles.MEASURE.GUTTER / (props.small ? 4 : 2),
          paddingHorizontal: props.small
            ? 0
            : Config.Styles.MEASURE.GUTTER / (props.small ? 4 : 2),
          paddingVertical: props.small
            ? 0
            : Config.Styles.MEASURE.GUTTER / (props.small ? 4 : 3),
          height: props.small
            ? height > 24
              ? height
              : 24
            : height > 52
            ? height
            : 52,
        },
      ]}
    />
  );
};

export default DynamicTextInput;
