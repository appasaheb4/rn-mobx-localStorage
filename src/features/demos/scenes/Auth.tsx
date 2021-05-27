import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Platform, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import * as Config from '@at/config';
import * as LibraryComponents from '@at/library/components';
import * as FeatureComponents from './components';
import * as LibraryModels from '@at/library/models';
import * as Models from '../models';
import * as GoogleSignIn from 'expo-google-sign-in';

import {Stores} from '../stores';
import {toJS} from 'mobx';
import {init} from '@at/library/modules/storage';

const Auth = observer(() => {
  const init = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId:
        '121741542652-129qqd72uv3tpfaq3sfgv2h9d96s64bp.apps.googleusercontent.com',
    });
  };
  useEffect(() => {
    init();
  }, []);

  const navigation = useNavigation<
    StackNavigationProp<Models.DemosRouterParams, 'Auth'>
  >();

  navigation.setOptions({
    title: 'Auth',
    headerTitleAlign: 'center',
    //headerRight: HeaderRight,
    headerBackTitle: 'Back',
    headerBackTitleVisible: Platform.OS === 'ios',
  });

  const syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    console.log({user});
    Stores.localStore.updateAuthUser(user);
  };

  const signInAsync = async () => {
    try {
      //await GoogleSignIn.askForPlayServicesAsync();
      const {type, user} = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        syncUserWithStateAsync();
      }
    } catch ({message}) {
      Alert.alert('login: Error:' + message);
    }
  };

  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    Stores.localStore.updateAuthUser(undefined);
  };

  return (
    <>
      <SafeAreaView />
      <LibraryComponents.Molecules.SceneWrapper
        gutter={LibraryModels.Component.Location.None}
        safe={false}
        statusBarColor={Config.Styles.COLORS.WHITE}>
        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Auto}
          justify="center">
          <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Block}
            gutter={LibraryModels.Component.Location.All}>
            {Stores.localStore.authUser && (
              <LibraryComponents.Molecules.WrappedView
                size={LibraryModels.Component.ElementSize.Block}
                gutter={LibraryModels.Component.Location.All}
                align="center">
                <LibraryComponents.Atoms.Typography.Regular>
                  {`Hi! ${Stores.localStore.authUser.displayName}`}
                </LibraryComponents.Atoms.Typography.Regular>
                <LibraryComponents.Atoms.Typography.Regular>
                  {`${Stores.localStore.authUser.email}`}
                </LibraryComponents.Atoms.Typography.Regular>
                <LibraryComponents.Molecules.ScaledImage
                  width={60}
                  height={60}
                  image={{
                    uri: Stores.localStore.authUser.photoURL,
                  }}
                />
              </LibraryComponents.Molecules.WrappedView>
            )}

            <LibraryComponents.Atoms.Button
              color={Config.Styles.COLORS.GOOGLE}
              onPress={() => {
                Stores.localStore.authUser ? signOutAsync() : signInAsync();
              }}>
              <LibraryComponents.Molecules.WrappedView
                stack={LibraryModels.Component.StackDirection.Horizontal}
                justify="center"
                align="center">
                {!Stores.localStore.authUser && (
                  <LibraryComponents.Atoms.Icon
                    icon="ri-google-fill"
                    size="medium"
                    color={Config.Styles.COLORS.WHITE}
                  />
                )}
                <LibraryComponents.Atoms.Typography.Regular
                  color={Config.Styles.COLORS.WHITE}>
                  {Stores.localStore.authUser
                    ? ' Sign Out'
                    : '  Sign In with Google'}
                </LibraryComponents.Atoms.Typography.Regular>
              </LibraryComponents.Molecules.WrappedView>
            </LibraryComponents.Atoms.Button>
          </LibraryComponents.Molecules.WrappedView>
        </LibraryComponents.Molecules.WrappedView>
      </LibraryComponents.Molecules.SceneWrapper>
    </>
  );
});

export default Auth;
