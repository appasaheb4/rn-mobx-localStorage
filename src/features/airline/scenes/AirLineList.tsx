import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  SectionList,
  SafeAreaView,
  NativeModules,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
import moment from 'moment';
import * as Config from '@at/config';
import * as LibraryComponents from '@at/library/components';
import * as LibraryModels from '@at/library/models';
import * as Models from '../models';

import {Stores} from '../stores';
moment.locale('de');

const AirLineList = observer(() => {
  // const route = useRoute<RouteProp<Models.PicaDayRouteParams, 'AirLineList'>>();
  const navigation = useNavigation<
    StackNavigationProp<Models.AirLineRouteParams, 'AirLineList'>
  >();

  navigation.setOptions({
    headerShown: false,
  });

  const capitalize = (s: string) => {
    if (typeof s !== 'string') {
      return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  };

  const getIcon = (item: any) => {
    if (item.DutyCode === 'FLIGHT') {
      return {
        icon: 'ri-plane-fill',
        title: `${item.Departure} - ${item.Destination}`,
      };
    }
    if (item.DutyCode === 'LAYOVER') {
      return {
        icon: 'ri-briefcase-4-fill',
        title: `${capitalize(item.DutyCode)}`,
      };
    }
    return {
      icon: 'ri-file-copy-fill',
      title: `${
        capitalize(item.DutyCode) !== 'Off'
          ? capitalize(item.DutyCode)
          : 'Standby'
      }`,
    };
  };

  useEffect(() => {
    NativeModules.Bitcoin.getCoin('USD').then((res: any) => {
      res = JSON.parse(res);
      console.log({res: res.bpi.USD});
    });
  }, []);

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
              size={LibraryModels.Component.ElementSize.Block}>
              {Stores.airLineStore.airLineList
                ? Stores.airLineStore.airLineList.length > 0 && (
                    <FlatList
                      data={Stores.airLineStore.airLineList || []}
                      refreshing={Stores.airLineStore.loading}
                      refreshControl={
                        <RefreshControl
                          colors={['#9Bd35A', '#689F38']}
                          refreshing={Stores.airLineStore.loading}
                          onRefresh={() => {
                            Stores.airLineStore.loading = true;
                            Stores.airLineStore.fetchAirLines();
                          }}
                        />
                      }
                      renderItem={({item, index}) => (
                        <LibraryComponents.Molecules.WrappedView>
                          <LibraryComponents.Molecules.WrappedView
                            size={LibraryModels.Component.ElementSize.Block}
                            gutter={LibraryModels.Component.Location.All}
                            gutterMultiplier={0.4}
                            background={Config.Styles.COLORS.LIGHT_1}>
                            <LibraryComponents.Atoms.Typography.Medium
                              bold
                              color={Config.Styles.COLORS.BLACK}>
                              {item.date}
                            </LibraryComponents.Atoms.Typography.Medium>
                          </LibraryComponents.Molecules.WrappedView>
                          {Object.entries(item.data).map(([key, values]) => {
                            return (
                              <SectionList
                                key={key}
                                sections={[{title: key, data: [values]}]}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item}) => (
                                  <LibraryComponents.Molecules.WrappedView
                                    size={
                                      LibraryModels.Component.ElementSize.Block
                                    }
                                    stack={
                                      LibraryModels.Component.StackDirection
                                        .Horizontal
                                    }
                                    gutter={
                                      LibraryModels.Component.Location.All
                                    }
                                    gutterMultiplier={0.4}
                                    align="center">
                                    <LibraryComponents.Atoms.Icon
                                      icon={getIcon(item).icon}
                                      size={40}
                                      color={Config.Styles.COLORS.BLACK}
                                    />
                                    <LibraryComponents.Molecules.WrappedView
                                      size={
                                        LibraryModels.Component.ElementSize
                                          .Block
                                      }
                                      margin={
                                        LibraryModels.Component.Location.Left
                                      }
                                      marginMultiplier={0.4}>
                                      <LibraryComponents.Atoms.Typography.Regular
                                        color={Config.Styles.COLORS.BLACK}
                                        bold>
                                        {`${getIcon(item).title}`}
                                      </LibraryComponents.Atoms.Typography.Regular>
                                      {(getIcon(item).title === 'Layover' ||
                                        getIcon(item).title === 'Standby') && (
                                        <>
                                          <LibraryComponents.Atoms.Spacer
                                            multiplier={0.2}
                                          />
                                          <LibraryComponents.Atoms.Typography.Small
                                            color={Config.Styles.COLORS.GREY_1}>
                                            {item.Departure +
                                              `${
                                                item.Destination
                                                  ? ` (${item.Destination})`
                                                  : ''
                                              }`}
                                          </LibraryComponents.Atoms.Typography.Small>
                                        </>
                                      )}
                                    </LibraryComponents.Molecules.WrappedView>
                                    <LibraryComponents.Molecules.WrappedView
                                      size={
                                        LibraryModels.Component.ElementSize.Auto
                                      }
                                      align="flex-end"
                                      justify="flex-end">
                                      <LibraryComponents.Atoms.Typography.Regular>
                                        {`${
                                          item.Time_Depart ===
                                            item.Time_Arrive && item.Time_Depart
                                            ? 'Match Crew'
                                            : ''
                                        }`}
                                      </LibraryComponents.Atoms.Typography.Regular>
                                      <LibraryComponents.Atoms.Spacer
                                        multiplier={0.2}
                                      />
                                      <LibraryComponents.Atoms.Typography.Regular
                                        color={Config.Styles.COLORS.RED}>
                                        {`${
                                          item.Time_Depart
                                            ? item.Time_Depart +
                                              '-' +
                                              item.Time_Arrive
                                            : ''
                                        }`}
                                      </LibraryComponents.Atoms.Typography.Regular>
                                    </LibraryComponents.Molecules.WrappedView>
                                  </LibraryComponents.Molecules.WrappedView>
                                )}
                              />
                            );
                          })}
                        </LibraryComponents.Molecules.WrappedView>
                      )}
                      keyExtractor={item => String(item.date + 'Main')}
                      // ItemSeparatorComponent={ItemSeparatorView}
                      // ListFooterComponent={ItemSeparatorView}
                      contentContainerStyle={{paddingBottom: 50}}
                      extraData={{
                        airLineList: Array.from(
                          Stores.airLineStore.airLineList,
                        ),
                      }}
                    />
                  )
                : null}
            </LibraryComponents.Molecules.WrappedView>
          </LibraryComponents.Molecules.WrappedView>
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

export default AirLineList;
