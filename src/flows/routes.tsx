import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigatorRef} from '@at/library/modules/navigator';
import _ from 'lodash';
import * as Config from '@at/config';
import RouterEvent from './router-events';

type StackNavigatorType = AuthRouteParams & FeedRouteParams & AvatarRouteParams;
const StackContainer = createStackNavigator<StackNavigatorType>();

interface StackProps {
  scenes: {[key: string]: React.FunctionComponent};
}

const Routes: React.FunctionComponent<StackProps> = props => {
  const routeNameRef = React.useRef<string | undefined>(null);
  return (
    <NavigationContainer
      ref={navigatorRef}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigatorRef?.current?.getCurrentRoute()?.name;
        const currentRouteParams = navigatorRef?.current?.getCurrentRoute()
          ?.params;
        if (previousRouteName !== currentRouteName) {
          RouterEvent.emit('routerChange', {
            screenName: currentRouteName || '',
            params: currentRouteParams,
          });
        }
        (routeNameRef as React.MutableRefObject<
          string | undefined
        >).current = currentRouteName;
      }}>
      <StackContainer.Navigator
        mode="modal"
        initialRouteName="StitchFeed"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Config.Styles.COLORS.WHITE,
          },
          headerBackTitleVisible: false,
          headerTintColor: Config.Styles.COLORS.BLACK,
        }}>
        {_.map(props.scenes, (scene, key) => (
          <StackContainer.Screen
            name={key as keyof StackNavigatorType}
            component={scene}
          />
        ))}
      </StackContainer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
