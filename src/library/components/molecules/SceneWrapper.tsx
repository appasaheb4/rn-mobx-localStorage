import React from 'react';
import {StatusBar, Platform, SafeAreaView} from 'react-native';
import WrappedView from './WrappedView';
import {Location} from '@at/library/models/component';
import * as Config from '@at/config';

interface SceneWrapperProps {
  gutter?: Location;
  gutterMultiplier?: number;
  statusBarColor?: Config.Styles.COLORS;
  safe?: boolean;
  isStatus?: boolean;
}

const SceneWrapper: React.FunctionComponent<SceneWrapperProps> = props => {
  const backgroundColor = props.statusBarColor || Config.Styles.COLORS.WHITE;
  const barStyle =
    backgroundColor === Config.Styles.COLORS.WHITE ||
    backgroundColor === Config.Styles.COLORS.LIGHT_1
      ? 'dark-content'
      : 'light-content';

  return (
    <>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        hidden={props.isStatus || false}
      />
      <WrappedView
        background={backgroundColor}
        gutter={props.gutter}
        gutterMultiplier={props.gutterMultiplier}>
        {props.safe && (
          <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}}>
            {props.children}
          </SafeAreaView>
        )}
        {!props.safe && props.children}
      </WrappedView>
    </>
  );
};

export default SceneWrapper;
