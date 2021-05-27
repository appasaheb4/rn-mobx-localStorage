import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as Config from '@at/config';

import * as LibraryComponents from '@at/library/components';
import * as FeatureComponents from './components';
import * as LibraryModels from '@at/library/models';
import * as Models from '../models';
import {RNCamera} from 'react-native-camera';

interface CaputureMomentProps {
  mode?: boolean;
}

const CaputureMoment = (props: CaputureMomentProps) => {
  const navigation = useNavigation<
    StackNavigationProp<Models.DemosRouterParams, 'CaputureMoment'>
  >();
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(true);
  const [isFlashMode, setIsFlashMode] = useState<boolean>(false);
  const [isCameraTypeBack, setIsCameraTypeBack] = useState<boolean>(true);
  const [images, setImages] = useState<string[]>([]);

  const rnCamera: any = useRef(null);

  useEffect(() => {
    setIsCameraOpen(props.mode || true);
  }, [props]);

  navigation.setOptions({
    headerShown: false,
  });

  const caputure = async () => {
    console.log({rnCamera});

    if (isCameraOpen) {
      const options = {quality: 0.5};
      const data = await rnCamera.current.takePictureAsync(options);
      const arrImages = images.concat(data.uri);
      setImages(arrImages);
    } else {
      Alert.alert('working');
    }
  };

  return (
    <>
      <SafeAreaView />
      <LibraryComponents.Molecules.SceneWrapper
        isStatus={true}
        gutter={LibraryModels.Component.Location.None}
        safe={false}
        statusBarColor={Config.Styles.COLORS.WHITE}>
        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Auto}>
          <RNCamera
            ref={rnCamera}
            style={styles.preview}
            type={
              isCameraTypeBack
                ? RNCamera.Constants.Type.back
                : RNCamera.Constants.Type.front
            }
            flashMode={
              isFlashMode
                ? RNCamera.Constants.FlashMode.torch
                : RNCamera.Constants.FlashMode.off
            }
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
        </LibraryComponents.Molecules.WrappedView>
        <LibraryComponents.Molecules.WrappedView
          size={LibraryModels.Component.ElementSize.Auto}
          gutter={LibraryModels.Component.Location.All}
          position="absolute"
          style={{bottom: 0, width: Config.Styles.MEASURE.WINDOW.WIDTH}}>
          <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Block}
            align="center">
            <LibraryComponents.Atoms.Icon
              icon="ri-arrow-drop-up-line"
              size={40}
              color={Config.Styles.COLORS.WHITE}
            />
            <FlatList
              data={images || []}
              horizontal={true}
              renderItem={({item}) => (
                <LibraryComponents.Molecules.WrappedView
                  size={LibraryModels.Component.ElementSize.Block}
                  // gutter={LibraryModels.Component.Location.All}
                  // gutterMultiplier={0.4}
                  border={{
                    location: LibraryModels.Component.Location.All,
                    size: 2,
                    color: Config.Styles.COLORS.WHITE,
                  }}
                  margin={LibraryModels.Component.Location.All}
                  marginMultiplier={0.2}
                  rounded={LibraryModels.Component.BorderLocation.All}>
                  <LibraryComponents.Molecules.ScaledImage
                    width={60}
                    height={60}
                    image={{
                      uri: item,
                    }}
                  />
                </LibraryComponents.Molecules.WrappedView>
              )}
              keyExtractor={item => String(item + 'Main')}
              extraData={{
                images: Array.from(images),
              }}
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
              onPress={() => isCameraOpen && setIsFlashMode(!isFlashMode)}>
              <LibraryComponents.Atoms.Icon
                icon={isFlashMode ? 'ri-flashlight-line' : 'ri-flashlight-fill'}
                size={30}
                color={Config.Styles.COLORS.WHITE}
              />
            </LibraryComponents.Atoms.Pill>

            <LibraryComponents.Atoms.Pill
              removeTextContainer={true}
              alignItems="center"
              onPress={() => {
                caputure();
              }}>
              <LibraryComponents.Atoms.Icon
                icon="ri-checkbox-blank-circle-line"
                size={100}
                color={
                  isCameraOpen
                    ? Config.Styles.COLORS.WHITE
                    : Config.Styles.COLORS.RED
                }
              />
            </LibraryComponents.Atoms.Pill>
            <LibraryComponents.Atoms.Pill
              removeTextContainer={true}
              alignItems="center"
              onPress={() => setIsCameraTypeBack(!isCameraTypeBack)}>
              <LibraryComponents.Atoms.Icon
                icon="ri-camera-switch-line"
                size={30}
                color={Config.Styles.COLORS.WHITE}
              />
            </LibraryComponents.Atoms.Pill>
          </LibraryComponents.Molecules.WrappedView>
          <LibraryComponents.Atoms.Spacer multiplier={0.4} />
          <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Block}
            stack={LibraryModels.Component.StackDirection.Horizontal}
            align="center"
            justify="center">
            <LibraryComponents.Atoms.Pill
              size="small"
              removeTextContainer={true}
              color={
                isCameraOpen
                  ? Config.Styles.COLORS.GREY_1
                  : Config.Styles.COLORS.WHITE
              }
              onPress={() => setIsCameraOpen(true)}>
              <LibraryComponents.Atoms.Typography.Regular
                color={
                  isCameraOpen
                    ? Config.Styles.COLORS.WHITE
                    : Config.Styles.COLORS.BLACK
                }>
                Photo
              </LibraryComponents.Atoms.Typography.Regular>
            </LibraryComponents.Atoms.Pill>
            <LibraryComponents.Molecules.WrappedView
              size={LibraryModels.Component.ElementSize.Block}
              margin={LibraryModels.Component.Location.Left}
              marginMultiplier={0.4}
            />
            <LibraryComponents.Atoms.Pill
              color={
                isCameraOpen
                  ? Config.Styles.COLORS.WHITE
                  : Config.Styles.COLORS.GREY_1
              }
              size="small"
              removeTextContainer={true}
              onPress={() => {
                setIsFlashMode(false);
                setIsCameraOpen(false);
              }}>
              <LibraryComponents.Atoms.Typography.Small
                color={
                  isCameraOpen
                    ? Config.Styles.COLORS.BLACK
                    : Config.Styles.COLORS.WHITE
                }>
                Video
              </LibraryComponents.Atoms.Typography.Small>
            </LibraryComponents.Atoms.Pill>
          </LibraryComponents.Molecules.WrappedView>
        </LibraryComponents.Molecules.WrappedView>
      </LibraryComponents.Molecules.SceneWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default CaputureMoment;
