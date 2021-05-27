import React, {useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import * as LibraryComponents from '@at/library/components';
import * as LibraryModels from '@at/library/models';
import WrappedView from './WrappedView';
import {Typography} from '../atoms';
import * as Config from '@at/config';

interface ProgressBarProps {
  progress: number;
  duration: number;
  height: number;
  borderColor?: Config.Styles.COLORS;
  borderWidth: number;
  borderRadius?: number;
  barColor?: Config.Styles.COLORS;
  fillColor?: Config.Styles.COLORS;
  row?: boolean;
}

const ProgressBar = (props: ProgressBarProps) => {
  const animation = new Animated.Value(props.progress || 0);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: props.progress,
      duration: props.duration,
    }).start();
  }, [props]);

  const widthInterpolated = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  return (
    <LibraryComponents.Molecules.WrappedView
      stack={LibraryModels.Component.StackDirection.Horizontal}
      size={LibraryModels.Component.ElementSize.Block}>
      <LibraryComponents.Molecules.WrappedView
        size={LibraryModels.Component.ElementSize.Block}
        border={{
          color: props.borderColor as Config.Styles.COLORS,
          size: props.borderWidth,
          location: LibraryModels.Component.Location.All,
        }}
        rounded={LibraryModels.Component.BorderLocation.All}
        minHeight={props.height}
        style={{width: props.height}}>
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: widthInterpolated,
            backgroundColor: props.barColor,
          }}
        />
      </LibraryComponents.Molecules.WrappedView>
    </LibraryComponents.Molecules.WrappedView>
  );
};
ProgressBar.defaultProps = {
  height: 20,
  borderColor: Config.Styles.COLORS.WHITE,
  borderWidth: 2,
  borderRadius: 4,
  barColor: Config.Styles.COLORS.YELLOW,
  fillColor: Config.Styles.COLORS.YELLOW,
  duration: 100,
};
export default ProgressBar;
