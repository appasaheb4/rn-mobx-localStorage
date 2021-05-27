import React from 'react';
import {
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import * as Config from '@at/config';
import * as LibraryComponents from '@at/library/components';
import * as FeatureComponents from '../components';
import * as LibraryModels from '@at/library/models';
import * as Models from '../models';

import {Stores} from '../stores';
const Temperature = observer(() => {
  const route = useRoute<RouteProp<Models.PicaDayRouteParams, 'PicaDayList'>>();
  const navigation = useNavigation<
    StackNavigationProp<Models.PicaDayRouteParams, 'PicaDayList'>
  >();

  navigation.setOptions({
    headerShown: false,
  });

  return (
    <LibraryComponents.Molecules.SceneWrapper
      gutter={LibraryModels.Component.Location.None}
      safe={false}
      statusBarColor={Config.Styles.COLORS.WHITE}>
      <LibraryComponents.Molecules.WrappedView
        size={LibraryModels.Component.ElementSize.Auto}>
        {/* <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Block}
          align="center"
          gutter={LibraryModels.Component.Location.All}
          gutterMultiplier={0.6}
          minHeight={20}>
          <LibraryComponents.Atoms.Typography.Regular bold>
            pica
            <LibraryComponents.Atoms.Typography.Regular
              color={Config.Styles.COLORS.PicaDay}
              bold>
              Day
            </LibraryComponents.Atoms.Typography.Regular>
          </LibraryComponents.Atoms.Typography.Regular>
        </LibraryComponents.Molecules.WrappedView> */}
        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Block}>
          <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Block}>
            <FlatList
              data={Stores.picaDayStore.picaDayList}
              renderItem={({item, index}) => (
                <>
                  <FeatureComponents.Molecules.PicaCard {...item} />
                </>
              )}
              contentContainerStyle={{paddingBottom: 50}}
            />
          </LibraryComponents.Molecules.WrappedView>
        </LibraryComponents.Molecules.WrappedView>
        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Block}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: Config.Styles.COLORS.WHITE,
            }}>
            <LibraryComponents.Molecules.Tabbar />
          </View>
        </LibraryComponents.Molecules.WrappedView>
      </LibraryComponents.Molecules.WrappedView>
    </LibraryComponents.Molecules.SceneWrapper>
  );
});

export default Temperature;
