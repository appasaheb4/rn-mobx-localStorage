import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react';
//import SoundRecorder from 'react-native-sound-recorder';
import {Audio} from 'expo-av';

import * as Config from '@at/config';
import * as LibraryComponents from '@at/library/components';
import * as LibraryModels from '@at/library/models';
import * as Models from '../models';
import * as Assets from '@at/library/assets';

import {Stores} from '../stores';
import {toJS} from 'mobx';

const AudioRecoader = observer(() => {
  const [recording, setRecording] = React.useState();
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const [isRecorded, setIsRecorded] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    console.log({storage: Stores.localStore.userList});
    setInterval(() => {
      setProgress(progress + 1);
    }, 1000);
  }, []);
  // const route = useRoute<RouteProp<Models.PicaDayRouteParams, 'AirLineList'>>();

  const navigation = useNavigation<
    StackNavigationProp<Models.DemosRouterParams, 'AudioRecoader'>
  >();

  navigation.setOptions({
    headerShown: false,
  });

  const updateCouter = (status: number) => {
    setIsTimer(!isTimer);
    Stores.localStore.updateCounter(0.0);
    let myInterval = setInterval(() => {
      if (status === 0) {
        clearInterval(myInterval);
      } else {
        const number = Stores.localStore.counter + 0.1;
        Stores.localStore.updateCounter(
          Math.round((number + Number.EPSILON) * 100) / 100,
        );
      }
    }, 1000);
  };

  const startRecording = async () => {
    try {
      //updateCouter(1);
      setIsRecorded(true);
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
      );
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    //updateCouter(0);
    setIsRecorded(false);
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    Stores.localStore.updateAudioList(uri);
  };

  return (
    <>
      <LibraryComponents.Molecules.SceneWrapper
        gutter={LibraryModels.Component.Location.None}
        safe={false}
        statusBarColor={Config.Styles.COLORS.BACKGROUND1}
        isStatus={true}>
        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Auto}
          align="center"
          justify="space-around"
          margin={LibraryModels.Component.Location.Top}
          marginMultiplier={-5}>
          {/* <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Block}
            stack={LibraryModels.Component.StackDirection.Horizontal}
            gutter={LibraryModels.Component.Location.All}
            align="center">
            <LibraryComponents.Molecules.ProgressBar
              row
              progress={progress}
              duration={500}
            />
            <LibraryComponents.Atoms.Typography.Small color={Config.Styles.COLORS.WHITE}>
              {`  0.30`}
            </LibraryComponents.Atoms.Typography.Small>
          </LibraryComponents.Molecules.WrappedView> */}
          <LibraryComponents.Atoms.Icon
            icon="ri-mic-fill"
            size={40}
            color={Config.Styles.COLORS.WHITE}
          />
        </LibraryComponents.Molecules.WrappedView>

        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Block}
          gutter={LibraryModels.Component.Location.All}
          style={{bottom: 0, width: Config.Styles.MEASURE.WINDOW.WIDTH}}>
          <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Block}
            align="center">
            <LibraryComponents.Molecules.ScaledImage
              image={require('@at/library/assets/audioWaves.png')}
              width={Dimensions.get('screen').width}
              height={100}
            />
          </LibraryComponents.Molecules.WrappedView>
          <LibraryComponents.Atoms.Spacer multiplier={0.6} />
          <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Block}
            stack={LibraryModels.Component.StackDirection.Horizontal}
            align="center"
            justify="space-around">
            <LibraryComponents.Atoms.Pill
              removeTextContainer={true}
              alignItems="center"
              onPress={() => isRecorded && {}}>
              <LibraryComponents.Atoms.Icon
                icon={'ri-delete-bin-line'}
                size={30}
                color={
                  isRecorded
                    ? Config.Styles.COLORS.WHITE
                    : Config.Styles.COLORS.GREY_1
                }
              />
            </LibraryComponents.Atoms.Pill>

            <LibraryComponents.Atoms.Pill
              removeTextContainer={true}
              alignItems="center"
              onPress={() => {
                isRecorded ? stopRecording() : startRecording();
              }}>
              <LibraryComponents.Atoms.Icon
                icon="ri-checkbox-blank-circle-line"
                size={100}
                color={
                  isRecorded
                    ? Config.Styles.COLORS.RED
                    : Config.Styles.COLORS.WHITE
                }
              />
            </LibraryComponents.Atoms.Pill>
            <LibraryComponents.Atoms.Pill
              removeTextContainer={true}
              alignItems="center"
              onPress={() => {}}>
              <LibraryComponents.Atoms.Icon
                icon="ri-check-line"
                size={30}
                color={
                  isRecorded
                    ? Config.Styles.COLORS.WHITE
                    : Config.Styles.COLORS.GREY_1
                }
              />
            </LibraryComponents.Atoms.Pill>
          </LibraryComponents.Molecules.WrappedView>
          <LibraryComponents.Atoms.Spacer multiplier={0.8} />
          <LibraryComponents.Atoms.Typography.Small
            color={Config.Styles.COLORS.WHITE}
            align="center">
            Tap to audio
          </LibraryComponents.Atoms.Typography.Small>
        </LibraryComponents.Molecules.WrappedView>
      </LibraryComponents.Molecules.SceneWrapper>
    </>
  );
});

export default AudioRecoader;
