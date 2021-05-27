import React from 'react';
import WrappedView from './WrappedView';
import * as Atoms from '../atoms';
import {Platform, View} from 'react-native';
import * as Config from '@at/config';
import * as Models from '../../models';
import {TouchableOpacity} from 'react-native';

interface FloatingHeaderProps {
  left: React.ReactNode;
  right: React.ReactNode;
  position?: 'top' | 'bottom';
  safe?: boolean;
  solid?: boolean;
  float?: boolean;
  border?: boolean;
  align?: 'flex-start' | 'flex-end' | 'center';
}

const FloatingHeader: React.FunctionComponent<FloatingHeaderProps> = props => {
  const safeGutter = props.safe ? 0.001 : Platform.OS === 'ios' ? 2 : 0.25;
  return (
    <>
      <Atoms.Spacer multiplier={safeGutter} />
      <WrappedView
        position={props.float ? 'absolute' : 'relative'}
        gutter={Models.Component.Location.Horizontal}
        gutterMultiplier={0.5}
        background={props.solid ? Config.Styles.COLORS.WHITE : undefined}
        border={
          props.border
            ? {
                size: 1,
                location: Models.Component.Location.Vertical,
                color: Config.Styles.COLORS.LIGHT_1,
              }
            : undefined
        }
        size={Models.Component.ElementSize.Block}>
        <WrappedView
          align={props.align || 'center'}
          gutter={Models.Component.Location.Vertical}
          gutterMultiplier={0.25}
          size={Models.Component.ElementSize.Block}
          stack={Models.Component.StackDirection.Horizontal}>
          <View style={{width: '25%', alignItems: 'flex-start'}}>
            {props.left || <TouchableOpacity />}
          </View>
          <View style={{width: '50%', alignItems: 'center'}}>
            {props.children}
          </View>
          <View style={{width: '25%', alignItems: 'flex-end'}}>
            {props.right}
          </View>
        </WrappedView>
      </WrappedView>
    </>
  );
};

FloatingHeader.defaultProps = {
  position: 'top',
  safe: true,
  float: true,
};

export default FloatingHeader;
