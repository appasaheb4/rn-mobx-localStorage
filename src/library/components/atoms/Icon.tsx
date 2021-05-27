import React from 'react';
import Icon from 'react-native-remix-icon';
import * as Config from '@at/config';
import _ from 'lodash';

const iconSizeMap = {
  small: Config.Styles.MEASURE.SCALER.getScaledValue(10),
  medium: Config.Styles.MEASURE.SCALER.getScaledValue(15),
  large: Config.Styles.MEASURE.SCALER.getScaledValue(30),
};

interface IconProps {
  icon: string;
  size?: number | keyof typeof iconSizeMap;
  color?: Config.Styles.COLORS;
}

const MtIcon: React.FunctionComponent<IconProps> = props => {
  const size = _.isNumber(props.size)
    ? props.size
    : iconSizeMap[props.size as keyof typeof iconSizeMap];
  return <Icon name={props.icon} size={size} color={props.color} />;
};

MtIcon.defaultProps = {
  size: 'medium',
  color: Config.Styles.COLORS.BLACK,
};

export default MtIcon;
