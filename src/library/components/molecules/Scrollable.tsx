import React, {useRef} from 'react';
import {
  ScrollView,
  RefreshControl,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import * as Config from '@at/config';
import {Location} from '@at/library/models/component';

interface ScrollableProps {
  gutter?: Location;
  gutterMultiplier?: number;
  showScroll?: boolean;
  onRefresh?: () => void;
  alwaysEnd?: boolean;
  refreshing?: boolean;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  horizontal?: boolean;
}

const Scrollable: React.FunctionComponent<ScrollableProps> = props => {
  const ref = useRef<ScrollView>(null);
  return (
    <ScrollView
      ref={ref}
      removeClippedSubviews={false}
      onScroll={props.onScroll}
      showsVerticalScrollIndicator={props.showScroll}
      style={{flex: 1}}
      horizontal={props.horizontal}
      contentContainerStyle={{
        paddingVertical:
          props.gutter === Location.All || props.gutter === Location.Vertical
            ? Config.Styles.MEASURE.GUTTER * (props.gutterMultiplier || 1)
            : 0,
        paddingHorizontal:
          props.gutter === Location.All || props.gutter === Location.Horizontal
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
      }}
      refreshControl={
        props.onRefresh ? (
          <RefreshControl
            onRefresh={props.onRefresh}
            refreshing={props.refreshing || false}
          />
        ) : undefined
      }
      onContentSizeChange={() => {
        if (props.alwaysEnd && ref) {
          ref.current?.scrollToEnd({animated: true});
        }
      }}>
      {props.children}
    </ScrollView>
  );
};

export default Scrollable;
