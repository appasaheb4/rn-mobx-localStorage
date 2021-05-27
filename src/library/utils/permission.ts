import {PermissionsAndroid, Platform} from 'react-native';

export const checkPermission = async () => {
  if (Platform.OS === 'ios') {
    return true;
  } else {
    try {
      const userResponse = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      return userResponse;
    } catch (err) {
      return err;
    }
  }
};

export const checkCameraPermission = async () => {
  if (Platform.OS === 'ios') {
    return true;
  } else {
    try {
      const userResponse = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
      return userResponse;
    } catch (err) {
      return err;
    }
  }
};
