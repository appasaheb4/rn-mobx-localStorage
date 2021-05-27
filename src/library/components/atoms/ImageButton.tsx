import React from 'react';
import {Image, TouchableOpacity, ViewStyle} from 'react-native';

interface ImageButtonProps {
  url: string;
  ratio: [number, number];
  onPress?: () => void;
  style?: ViewStyle;
  mode?: 'cover' | 'contain';
}

const ImageButton: React.FunctionComponent<ImageButtonProps> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.style,
        {
          position: 'relative',
          width: '100%',
          paddingBottom: `${(props.ratio[1] * 100) / props.ratio[0]}%`,
          overflow: 'hidden',
        },
      ]}>
      <Image
        source={{uri: props.url}}
        resizeMode={props.mode || 'contain'}
        style={{top: 0, left: 0, right: 0, bottom: 0, position: 'absolute'}}
      />
    </TouchableOpacity>
  );
};

export default ImageButton;
