import React from 'react';
import {View} from 'react-native';
import * as Config from '@at/config';

import * as Typography from './Typography';
import Spacer from './Spacer';

interface InputProps {
  label: string;
  childHasContainer?: boolean;
  color?: Config.Styles.COLORS;
  align?: 'left' | 'center' | 'right';
  small?: boolean;
  bold?: boolean;
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  children,
  childHasContainer,
  color,
  align,
  bold,
  small,
}) => (
  <>
    <Typography.Regular align={align || 'center'} color={color} bold={bold}>
      {label}
    </Typography.Regular>
    {!small && <Spacer multiplier={0.5} />}
    {childHasContainer && children}
    {!childHasContainer && (
      <View
        style={{
          flexGrow: 1,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: Config.Styles.COLORS.WHITE,
          height: 50,
          marginBottom: Config.Styles.MEASURE.GUTTER,
          paddingHorizontal: 10,
          borderRadius: 10,
          paddingVertical: 10,
          backgroundColor: Config.Styles.COLORS.WHITE,
        }}>
        {children}
      </View>
    )}
  </>
);

export default Input;
