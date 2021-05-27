import React from 'react';
import {View} from 'react-native';
import * as Config from '@at/config';

import * as Typography from './Typography';
import Spacer from './Spacer';

interface InputWrapperWithLabelProps {
  label: string;
  childHasContainer?: boolean;
  color?: Config.Styles.COLORS;
  align?: 'left' | 'center' | 'right';
  small?: boolean;
  bold?: boolean;
}

const InputWrapperWithLabel: React.FunctionComponent<InputWrapperWithLabelProps> = ({
  label,
  children,
  childHasContainer,
  color,
  align,
  bold,
  small,
}) => (
  <>
    {!small && (
      <Typography.Regular align={align || 'center'} color={color} bold={bold}>
        {label}
      </Typography.Regular>
    )}
    {small && (
      <Typography.Small align={align || 'center'} color={color} bold={bold}>
        {label}
      </Typography.Small>
    )}
    <Spacer multiplier={small ? 0.25 : 0.5} />
    {childHasContainer && children}
    {!childHasContainer && (
      <View
        style={{
          flexGrow: 1,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: Config.Styles.COLORS.WHITE,
          height: 3.25 * Config.Styles.MEASURE.GUTTER,
          marginBottom: Config.Styles.MEASURE.GUTTER / 2,
          paddingHorizontal: Config.Styles.MEASURE.GUTTER,
          borderRadius: Config.Styles.MEASURE.GUTTER,
          paddingVertical: Config.Styles.MEASURE.GUTTER / 2,
          backgroundColor: Config.Styles.COLORS.LIGHT_1,
        }}>
        {children}
      </View>
    )}
  </>
);

export default InputWrapperWithLabel;
