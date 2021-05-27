import React from 'react';
import * as Config from '@at/config';
import {View, StyleProp} from 'react-native';
import {
  ElementSize,
  StackDirection,
  Location,
  BorderLocation,
} from '@at/library/models/component';
import {ViewStyle} from 'react-native-phone-input';

interface WrappedViewProps {
  background?: Config.Styles.COLORS;
  size?: ElementSize;
  stack?: StackDirection;
  rounded?: BorderLocation;
  gutter?: Location;
  gutterMultiplier?: number;
  margin?: Location;
  marginMultiplier?: number;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  wrap?: boolean;
  minHeight?: number;
  shrink?: boolean;
  position?: 'relative' | 'absolute';
  border?: {
    location: Location;
    size: number;
    color: Config.Styles.COLORS;
  };
  style?: ViewStyle;
}

const WrappedView: React.FunctionComponent<WrappedViewProps> = props => {
  return (
    <View
      style={[
        props.style,
        {
          paddingVertical:
            props.gutter === Location.All || props.gutter === Location.Vertical
              ? Config.Styles.MEASURE.GUTTER * (props.gutterMultiplier || 1)
              : 0,
          paddingHorizontal:
            props.gutter === Location.All ||
            props.gutter === Location.Horizontal
              ? Config.Styles.MEASURE.GUTTER * (props.gutterMultiplier || 1)
              : 0,
          paddingTop:
            props.gutter === Location.Top
              ? Config.Styles.MEASURE.GUTTER * (props.gutterMultiplier || 1)
              : undefined,
          paddingLeft:
            props.gutter === Location.Left
              ? Config.Styles.MEASURE.GUTTER * (props.gutterMultiplier || 1)
              : undefined,
          paddingRight:
            props.gutter === Location.Right
              ? Config.Styles.MEASURE.GUTTER * (props.gutterMultiplier || 1)
              : undefined,
          paddingBottom:
            props.gutter === Location.Bottom
              ? Config.Styles.MEASURE.GUTTER * (props.gutterMultiplier || 1)
              : undefined,
          marginVertical:
            props.margin === Location.All || props.margin === Location.Vertical
              ? Config.Styles.MEASURE.GUTTER * (props.marginMultiplier || 1)
              : 0,
          marginHorizontal:
            props.margin === Location.All ||
            props.margin === Location.Horizontal
              ? Config.Styles.MEASURE.GUTTER * (props.marginMultiplier || 1)
              : 0,
          marginTop:
            props.margin === Location.Top
              ? Config.Styles.MEASURE.GUTTER * (props.marginMultiplier || 1)
              : undefined,
          marginLeft:
            props.margin === Location.Left
              ? Config.Styles.MEASURE.GUTTER * (props.marginMultiplier || 1)
              : undefined,
          marginRight:
            props.margin === Location.Right
              ? Config.Styles.MEASURE.GUTTER * (props.marginMultiplier || 1)
              : undefined,
          marginBottom:
            props.margin === Location.Bottom
              ? Config.Styles.MEASURE.GUTTER * (props.marginMultiplier || 1)
              : undefined,
          justifyContent: props.justify,
          alignItems: props.align,
          borderTopLeftRadius:
            props.rounded === BorderLocation.Circle
              ? 100
              : props.rounded === BorderLocation.All ||
                props.rounded === BorderLocation.TopOnly ||
                props.rounded === BorderLocation.LeftOnly
              ? Config.Styles.MEASURE.GUTTER * 0.75
              : 0,
          borderTopRightRadius:
            props.rounded === BorderLocation.Circle
              ? 100
              : props.rounded === BorderLocation.All ||
                props.rounded === BorderLocation.TopOnly ||
                props.rounded === BorderLocation.RightOnly
              ? Config.Styles.MEASURE.GUTTER * 0.75
              : 0,
          borderBottomLeftRadius:
            props.rounded === BorderLocation.Circle
              ? 100
              : props.rounded === BorderLocation.All ||
                props.rounded === BorderLocation.BottomOnly ||
                props.rounded === BorderLocation.LeftOnly
              ? Config.Styles.MEASURE.GUTTER * 0.75
              : 0,
          borderBottomRightRadius:
            props.rounded === BorderLocation.Circle
              ? 100
              : props.rounded === BorderLocation.All ||
                props.rounded === BorderLocation.BottomOnly ||
                props.rounded === BorderLocation.RightOnly
              ? Config.Styles.MEASURE.GUTTER * 0.75
              : 0,
          backgroundColor: props.background,
          flexGrow: props.size === ElementSize.Auto ? 1 : 0,
          flexShrink: props.shrink ? 1 : 0,
          flexDirection: props.stack,
          flexWrap: props.wrap ? 'wrap' : undefined,
          overflow:
            props.rounded === BorderLocation.None ? undefined : 'hidden',
          minHeight: props.minHeight,
          position: props.position,
          borderTopWidth: props.border
            ? [Location.All, Location.Vertical, Location.Top].indexOf(
                props.border?.location,
              ) !== -1
              ? props.border?.size
              : 0
            : 0,
          borderBottomWidth: props.border
            ? [Location.All, Location.Vertical, Location.Bottom].indexOf(
                props.border?.location,
              ) !== -1
              ? props.border?.size
              : 0
            : 0,
          borderLeftWidth: props.border
            ? [Location.All, Location.Horizontal, Location.Left].indexOf(
                props.border?.location,
              ) !== -1
              ? props.border?.size
              : 0
            : 0,
          borderRightWidth: props.border
            ? [Location.All, Location.Horizontal, Location.Right].indexOf(
                props.border?.location,
              ) !== -1
              ? props.border?.size
              : 0
            : 0,
          borderColor: props.border ? props.border?.color : undefined,
        },
      ]}>
      {props.children}
    </View>
  );
};

WrappedView.defaultProps = {
  size: ElementSize.Auto,
  stack: StackDirection.Vertical,
  rounded: BorderLocation.None,
  justify: 'flex-start',
  align: 'stretch',
  gutterMultiplier: 1,
  marginMultiplier: 1,
};

export default WrappedView;
