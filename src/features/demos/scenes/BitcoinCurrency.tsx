import React, {useState} from 'react';
import {View, SafeAreaView, NativeModules, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import * as Config from '@at/config';
import * as LibraryComponents from '@at/library/components';
import * as LibraryModels from '@at/library/models';
import * as Models from '../models';

import {Stores} from '../stores';

const BitcoinCurrency = observer(() => {
  // const route = useRoute<RouteProp<Models.PicaDayRouteParams, 'AirLineList'>>();
  const [value, setValue] = useState<string>('');
  const navigation = useNavigation<
    StackNavigationProp<Models.DemosRouterParams, 'BitcoinCurrency'>
  >();

  navigation.setOptions({
    title: 'Bitcoin Currency (ios only)',
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
                style={{
                  borderColor: Config.Styles.COLORS.BLACK,
                  borderWidth: 0.5,
                  height: 45,
                }}
                autoCapitalize="characters"
                placeholder="Bitcoin currency"
                value={value}
                color={Config.Styles.COLORS.FACEBOOK}
                onChangeText={async (value: string) => {
                  setValue(value.toUpperCase());
                  NativeModules.Bitcoin.getCoin(value.toUpperCase()).then(
                    (res: any) => {
                      res = JSON.parse(res);
                      console.log({res});
                      console.log({res: res.bpi[value]});
                      Stores.currencyStore.updateCurreny(res.bpi[value]);
                    },
                  );
                }}
              />
              <LibraryComponents.Atoms.Spacer multiplier={0.6} />
              {!Stores.currencyStore.curreny && (
                <LibraryComponents.Atoms.Typography.Regular
                  color={Config.Styles.COLORS.RED}>
                  Please type curreny
                </LibraryComponents.Atoms.Typography.Regular>
              )}
              {Stores.currencyStore.curreny && (
                <>
                  <LibraryComponents.Atoms.Typography.Regular>
                    Code: {Stores.currencyStore.curreny.code}
                  </LibraryComponents.Atoms.Typography.Regular>
                  <LibraryComponents.Atoms.Spacer multiplier={0.4} />
                  <LibraryComponents.Atoms.Typography.Regular>
                    Description: {Stores.currencyStore.curreny.description}
                  </LibraryComponents.Atoms.Typography.Regular>
                  <LibraryComponents.Atoms.Spacer multiplier={0.4} />
                  <LibraryComponents.Atoms.Typography.Regular>
                    Rate: {Stores.currencyStore.curreny.rate}
                  </LibraryComponents.Atoms.Typography.Regular>
                  <LibraryComponents.Atoms.Spacer multiplier={0.4} />
                  <LibraryComponents.Atoms.Typography.Regular>
                    Rate float: {Stores.currencyStore.curreny.rate_float}
                  </LibraryComponents.Atoms.Typography.Regular>
                </>
              )}
            </LibraryComponents.Molecules.WrappedView>
          </LibraryComponents.Molecules.WrappedView>
        </LibraryComponents.Molecules.WrappedView>
      </LibraryComponents.Molecules.SceneWrapper>
    </>
  );
});

export default BitcoinCurrency;
