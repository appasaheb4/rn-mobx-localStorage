import React from 'react';
import {Image, StyleProp, ViewStyle, GestureResponderEvent} from 'react-native';

interface ScaledImageProps {
  ratio?: number;
  align?: 'top' | 'bottom';
  width?: number;
  height?: number;
  image: any;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: GestureResponderEvent) => void;
}

const ScaledImage: React.FunctionComponent<ScaledImageProps> = props => {
  return (
    <Image
      source={props.image}
      style={{width: props.width, height: props.height}}
      resizeMode="stretch"
    />
  );
};

export default ScaledImage;
