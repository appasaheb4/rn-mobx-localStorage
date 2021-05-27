/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import Routes from './src/flows/routes';

import React from 'react';
import * as Demos from './src/features/demos';
import {LogBox} from 'react-native';
import {configure} from 'mobx';
configure({
  enforceActions: 'never',
});

LogBox.ignoreLogs(['Warning:']);
declare const global: {HermesInternal: null | {}};

const App = () => {
  const loader = async () => {
    await Demos.startup();
  };

  React.useEffect(() => {
    loader();
  }, []);
  return (
    <>
      <Routes
        scenes={{
          ...Demos.Scenes,
        }}
      />
    </>
  );
};
console.disableYellowBox = true;
export default App;
