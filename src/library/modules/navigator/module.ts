import * as React from 'react';
import {
  NavigationContainerRef,
  StackActions,
  ParamListBase,
} from '@react-navigation/native';

export const navigatorRef = React.createRef<NavigationContainerRef>();

class Navigator<A extends ParamListBase> {
  navigate(name: keyof A, params: A[keyof A]) {
    navigatorRef.current?.navigate(name as string, params);
  }
  push(name: keyof A, params: A[keyof A]) {
    navigatorRef.current?.dispatch(StackActions.push(name as string, params));
  }
  back() {
    navigatorRef.current?.goBack();
  }
  pop(depth?: number) {
    navigatorRef.current?.dispatch(StackActions.pop(depth));
  }
}

export default Navigator;
