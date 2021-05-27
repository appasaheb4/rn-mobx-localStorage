import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import * as Config from '@at/config';
import * as LibraryComponents from '@at/library/components';
import * as LibraryModels from '@at/library/models';
import * as Models from '../models';

import {Stores} from '../stores';
import {toJS} from 'mobx';

const Storage = observer(() => {
  useEffect(() => {
    console.log({storage: Stores.localStore.userList});
  }, []);
  // const route = useRoute<RouteProp<Models.PicaDayRouteParams, 'AirLineList'>>();
  const [value, setValue] = useState<string>('');
  const navigation = useNavigation<
    StackNavigationProp<Models.DemosRouterParams, 'Storage'>
  >();

  navigation.setOptions({
    title: 'Storage',
    headerTitleAlign: 'center',
    //headerRight: HeaderRight,
    headerBackTitle: 'Back',
    headerBackTitleVisible: Platform.OS === 'ios',
  });

  return (
    <>
      <SafeAreaView />
      <LibraryComponents.Molecules.SceneWrapper
        gutter={LibraryModels.Component.Location.None}
        safe={false}
        statusBarColor={Config.Styles.COLORS.WHITE}>
        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Auto}>
          <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Block}>
            <LibraryComponents.Molecules.WrappedView
              size={LibraryModels.Component.ElementSize.Block}
              gutter={LibraryModels.Component.Location.All}>
              <LibraryComponents.Atoms.TextInput
                placeholder={'First Name'}
                style={{
                  borderColor: Config.Styles.COLORS.BLACK,
                  borderWidth: 0.5,
                  height: 45,
                }}
                value={Stores.localStore.user?.firstName}
                onChangeText={text => {
                  Stores.localStore.updateUser({
                    ...Stores.localStore.user,
                    firstName: text,
                  });
                }}
              />
              <LibraryComponents.Atoms.Spacer multiplier={0.5} />
              <LibraryComponents.Atoms.TextInput
                style={{
                  borderColor: Config.Styles.COLORS.BLACK,
                  borderWidth: 0.5,
                  height: 45,
                }}
                placeholder={'Last Name'}
                value={Stores.localStore.user?.lastName}
                onChangeText={text => {
                  Stores.localStore.updateUser({
                    ...Stores.localStore.user,
                    lastName: text,
                  });
                }}
              />
              <LibraryComponents.Atoms.Spacer multiplier={0.5} />
              <LibraryComponents.Atoms.Button
                size="small"
                onPress={() => {
                  Stores.localStore.updateUserList(
                    toJS(Stores.localStore.user),
                  );
                  Stores.localStore.clearUser();
                }}>
                <LibraryComponents.Atoms.Typography.Regular
                  color={Config.Styles.COLORS.WHITE}>
                  Save
                </LibraryComponents.Atoms.Typography.Regular>
              </LibraryComponents.Atoms.Button>
            </LibraryComponents.Molecules.WrappedView>
            <LibraryComponents.Molecules.WrappedView>
              <FlatList
                data={Stores.localStore.userList || []}
                renderItem={({item}) => (
                  <LibraryComponents.Molecules.WrappedView
                    size={LibraryModels.Component.ElementSize.Block}
                    gutter={LibraryModels.Component.Location.All}
                    gutterMultiplier={0.4}
                    background={Config.Styles.COLORS.LIGHT_1}>
                    <LibraryComponents.Atoms.Typography.Medium
                      bold
                      color={Config.Styles.COLORS.BLACK}>
                      {`${item.firstName} ${item.lastName}`}
                    </LibraryComponents.Atoms.Typography.Medium>
                  </LibraryComponents.Molecules.WrappedView>
                )}
                keyExtractor={item => String(item + 'Main')}
              />
            </LibraryComponents.Molecules.WrappedView>
          </LibraryComponents.Molecules.WrappedView>
        </LibraryComponents.Molecules.WrappedView>
      </LibraryComponents.Molecules.SceneWrapper>
    </>
  );
});

export default Storage;
