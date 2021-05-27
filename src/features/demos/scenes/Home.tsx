import React, {useState} from 'react';
import {View, SafeAreaView, NativeModules} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import * as Config from '@at/config';
import * as LibraryComponents from '@at/library/components';
import * as LibraryModels from '@at/library/models';
import * as Models from '../models';
import * as Flows from '../flows';

import {Stores} from '../stores';

const Home = observer(() => {
  // const route = useRoute<RouteProp<Models.PicaDayRouteParams, 'AirLineList'>>();
  // const navigation = useNavigation<
  //   StackNavigationProp<Models.DemosRouterParams, 'Home'>
  // >();

  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  return (
    <>
      <SafeAreaView />
      <LibraryComponents.Molecules.SceneWrapper
        gutter={LibraryModels.Component.Location.None}
        safe={false}
        statusBarColor={Config.Styles.COLORS.WHITE}>
        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Auto}
          gutter={LibraryModels.Component.Location.All}>
          <LibraryComponents.Atoms.Button
            onPress={() => Flows.DemosFlows.goCaputureMoment()}>
            <LibraryComponents.Atoms.Typography.Regular
              color={Config.Styles.COLORS.WHITE}>
              Caputure Moment
            </LibraryComponents.Atoms.Typography.Regular>
          </LibraryComponents.Atoms.Button>
          <LibraryComponents.Atoms.Spacer multiplier={0.8} />
          <LibraryComponents.Atoms.Button
            onPress={() => Flows.DemosFlows.goAuth()}>
            <LibraryComponents.Atoms.Typography.Regular
              color={Config.Styles.COLORS.WHITE}>
              Auth
            </LibraryComponents.Atoms.Typography.Regular>
          </LibraryComponents.Atoms.Button>
          <LibraryComponents.Atoms.Spacer multiplier={0.8} />
          <LibraryComponents.Atoms.Button
            onPress={() => Flows.DemosFlows.goAudioRecoader()}>
            <LibraryComponents.Atoms.Typography.Regular
              color={Config.Styles.COLORS.WHITE}>
              Audio Recoader
            </LibraryComponents.Atoms.Typography.Regular>
          </LibraryComponents.Atoms.Button>
          <LibraryComponents.Atoms.Spacer multiplier={0.8} />
          <LibraryComponents.Atoms.Button
            onPress={() => Flows.DemosFlows.goStorage()}>
            <LibraryComponents.Atoms.Typography.Regular
              color={Config.Styles.COLORS.WHITE}>
              Storage
            </LibraryComponents.Atoms.Typography.Regular>
          </LibraryComponents.Atoms.Button>
          <LibraryComponents.Atoms.Spacer multiplier={0.8} />
          <LibraryComponents.Atoms.Button
            onPress={() => Flows.DemosFlows.goBitcoinCurrency()}>
            <LibraryComponents.Atoms.Typography.Regular
              color={Config.Styles.COLORS.WHITE}>
              Bitcoin Currency
            </LibraryComponents.Atoms.Typography.Regular>
          </LibraryComponents.Atoms.Button>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: Config.Styles.COLORS.WHITE,
            }}>
            <LibraryComponents.Molecules.Tabbar
            // onPicaDay={() => PicaDayFlows.picaDay()}
            // onCaptureMoment={() => {
            //   console.log('hi');

            //   PicaDayFlows.captureMoment();
            // }}
            // onTemerature={() => PicaDayFlows.temperature()}
            />
          </View>
        </LibraryComponents.Molecules.WrappedView>
      </LibraryComponents.Molecules.SceneWrapper>
    </>
  );
});

export default Home;
