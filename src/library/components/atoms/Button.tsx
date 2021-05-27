import React from 'react';
import {
  TouchableHighlight,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';
import * as Config from '@at/config';

interface ButtonProps {
  size?: 'small' | 'large' | 'regular';
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  color?: Config.Styles.COLORS;
  textColor?: Config.Styles.COLORS;
  stretch?: boolean;
}

const getButtonHeightBySize = (size: 'small' | 'large' | 'regular') => {
  const values = {
    small: 24,
    large: 60,
    regular: 30,
  };

  return Config.Styles.MEASURE.SCALER.getScaledValue(values[size]);
};

const Button: React.FunctionComponent<ButtonProps> = props => {
  return (
    <TouchableHighlight
      onPress={!props.disabled && !props.loading ? props.onPress : undefined}
      disabled={props.disabled || props.loading}
      style={{
        flexGrow: props.stretch ? 1 : undefined,
        height: getButtonHeightBySize(props.size || 'regular'),
        flexShrink: 0,
        borderRadius: Config.Styles.MEASURE.GUTTER * 2,
        backgroundColor: props.color || Config.Styles.COLORS.BLACK,
        opacity: props.disabled ? 0.5 : 1,
        overflow: 'hidden',
        elevation: props.size === 'large' ? 5 : 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <>
        {props.children}
        {props.loading && (
          <ActivityIndicator
            size={props.size === 'large' ? 'large' : 'small'}
            color={props.textColor || Config.Styles.COLORS.WHITE}
            style={{position: 'absolute', right: 10}}
          />
        )}
      </>
    </TouchableHighlight>
  );
};

export default Button;
