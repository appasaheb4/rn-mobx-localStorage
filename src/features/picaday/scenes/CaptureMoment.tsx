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

const CaptureMoment = observer(() => {
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
        size={LibraryModels.Component.ElementSize.Auto}
      />
    </LibraryComponents.Molecules.SceneWrapper>
  );
});

export default CaptureMoment;
