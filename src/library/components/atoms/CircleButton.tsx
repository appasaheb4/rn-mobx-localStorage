import React, {Props} from 'react';

import {ImageBackground, ImageStyle, TouchableOpacity} from 'react-native';
import * as Config from '@at/config';
import _ from 'lodash';

const sizeMap = {
  small: Config.Styles.MEASURE.SCALER.getScaledValue(10),
  medium: Config.Styles.MEASURE.SCALER.getScaledValue(25),
  large: Config.Styles.MEASURE.SCALER.getScaledValue(35),
};

interface CircleButtonProps {
  size: keyof typeof sizeMap | number;
  background?: Config.Styles.COLORS;
  onPress?: () => void;
  image?: string;
  imageStyle?: ImageStyle;
  mode?: 'cover' | 'contain';
  elevation?: number;
  marginTop?: number;
}

const CircleButton: React.FunctionComponent<CircleButtonProps> = props => {
  const dimensions = _.isNumber(props.size)
    ? props.size
    : sizeMap[props.size as keyof typeof sizeMap];
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: dimensions,
        height: dimensions,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.background,
        borderRadius: dimensions,
        overflow: 'hidden',
        elevation: props.elevation,
        marginTop: props.marginTop,
      }}>
      {props.image && (
        <ImageBackground
          source={{uri: props.image}}
          resizeMode={props.mode || 'contain'}
          style={[
            props.imageStyle,
            {
              width: dimensions,
              height: dimensions,
            },
          ]}>
          {props.children}
        </ImageBackground>
      )}
      {!props.image && props.children}
    </TouchableOpacity>
  );
};

CircleButton.defaultProps = {
  mode: 'contain',
};

export default CircleButton;
