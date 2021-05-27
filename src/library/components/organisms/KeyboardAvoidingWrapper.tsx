import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  NativeModules,
  StyleProp,
  ViewStyle,
} from 'react-native';
import * as Config from '@at/config';

const {StatusBarManager} = NativeModules;

interface KeyboardAvoidingWrapperProps {
  style: StyleProp<ViewStyle>;
  noOffset?: boolean;
  safe?: boolean;
  behavior?: 'padding' | 'position';
}

interface StatusBarManagerType {
  height: number;
}

const KeyboardAvoidingWrapper: React.FunctionComponent<KeyboardAvoidingWrapperProps> = props => {
  const [statusBarHeight, setStatusBarHeight] = React.useState<number>(0);

  React.useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(({height}: StatusBarManagerType) => {
        setStatusBarHeight(
          height +
            (props.safe ? Config.Styles.MEASURE.SCALER.getScaledValue(12) : 0),
        );
      });
    }
  }, []);

  return (
    <KeyboardAvoidingView
      style={props.style}
      enabled
      behavior={
        props.behavior || (Platform.OS === 'ios' ? 'padding' : undefined)
      }
      keyboardVerticalOffset={
        Platform.OS === 'ios' && !props.noOffset ? statusBarHeight : undefined
      }>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
