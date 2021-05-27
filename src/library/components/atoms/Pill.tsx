import React from 'react';
import * as Config from '@at/config';
import {TouchableOpacity} from 'react-native';
import * as Typography from './Typography';

interface PillProps {
  color?: Config.Styles.COLORS;
  textColor?: Config.Styles.COLORS;
  fill?: boolean;
  size?: 'small' | 'large';
  onPress?: () => void;
  disabled?: boolean;
  border?: boolean;
  removeTextContainer?: boolean;
  alignItems?: 'center' | 'flex-end';
}

const Pill: React.FunctionComponent<PillProps> = props => (
  <TouchableOpacity
    onPress={!props.disabled ? props.onPress : undefined}
    style={{
      paddingVertical: Config.Styles.MEASURE.SCALER.getScaledValue(
        props.size === 'small' ? 3 : 4,
      ),
      alignItems: props.alignItems,
      paddingHorizontal: Config.Styles.MEASURE.SCALER.getScaledValue(5),
      backgroundColor: props.color || null,
      borderRadius: Config.Styles.MEASURE.SCALER.getScaledValue(10),
      flexGrow: props.fill ? 1 : undefined,
      opacity: props.disabled ? 0.5 : 1,
      borderWidth: props.border ? 1 : 0,
      borderColor: props.border ? Config.Styles.COLORS.PRIMARY : undefined,
    }}>
    {props.removeTextContainer && props.children}
    {!props.removeTextContainer && (
      <Typography.Small
        footNote={props.size === 'small'}
        align="center"
        color={props.textColor || Config.Styles.COLORS.WHITE}>
        {props.children}
      </Typography.Small>
    )}
  </TouchableOpacity>
);

Pill.defaultProps = {
  size: 'small',
};

export default Pill;
