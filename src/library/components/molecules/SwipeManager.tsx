import React, {Component} from 'react';
import {
  View,
  Animated,
  PanResponder,
  PanResponderInstance,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface SwipeManagerProps {
  onSwipePerformed: (direction: string) => void;
  disabled?: boolean;
  scrollable?: boolean;
  useMomentumScroll?: boolean;
  gestureStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  innerStyle?: StyleProp<ViewStyle>;
}

export default class SwipeManager extends Component<SwipeManagerProps> {
  state = {
    prevPos: undefined,
  };
  private PanResponder?: PanResponderInstance;

  UNSAFE_componentWillMount = (): void => {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => {
        // const x = gestureState.dx;
        // const y = gestureState.dy;
        return true;
      },
      onPanResponderTerminate: (evt, gestureState) => {
        const x = gestureState.dx;
        const y = gestureState.dy;
        if (Math.abs(x) > Math.abs(y)) {
          if (x >= 0) {
            this.props.onSwipePerformed('right');
          } else {
            this.props.onSwipePerformed('left');
          }
        } else {
          if (y >= 0) {
            this.props.onSwipePerformed('down');
          } else {
            this.props.onSwipePerformed('up');
          }
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        const x = gestureState.dx;
        const y = gestureState.dy;
        if (Math.abs(x) > Math.abs(y)) {
          if (x >= 0) {
            this.props.onSwipePerformed('right');
          } else {
            this.props.onSwipePerformed('left');
          }
        } else {
          if (y >= 0) {
            this.props.onSwipePerformed('down');
          } else {
            this.props.onSwipePerformed('up');
          }
        }
      },
    });
  };

  render(): any {
    if (this.props.disabled) {
      return <View>{this.props.children}</View>;
    }

    if (this.props.useMomentumScroll) {
      return (
        <Animated.ScrollView
          style={this.props.gestureStyle}
          onMomentumScrollEnd={event => {
            // scroll animation ended
            const yPos = event.nativeEvent.contentOffset.y;
            if (yPos === 0 && yPos === this.state.prevPos) {
              this.props.onSwipePerformed('down');
            }

            if (yPos !== 0 && yPos === this.state.prevPos) {
              this.props.onSwipePerformed('up');
            }
            this.setState({prevPos: yPos});
          }}>
          <View style={this.props.innerStyle}>{this.props.children}</View>
        </Animated.ScrollView>
      );
    }
    if (this.props.scrollable) {
      return (
        <Animated.ScrollView
          {...this.PanResponder?.panHandlers}
          style={this.props.gestureStyle}>
          <View style={this.props.innerStyle}>{this.props.children}</View>
        </Animated.ScrollView>
      );
    }
    return (
      <Animated.View
        {...this.PanResponder?.panHandlers}
        style={this.props.gestureStyle}>
        <View style={this.props.innerStyle}>{this.props.children}</View>
      </Animated.View>
    );
  }
}
