import AsyncStorage from '@react-native-community/async-storage';

export function getItem<T>(key: string) {
  return new Promise<T | undefined>((resolve, reject) => {
    AsyncStorage.getItem(key, (error, result) => {
      if (error) {
        reject(error);
      }
      if (!result) {
        resolve(undefined);
      } else {
        resolve(JSON.parse(result) as T);
      }
    });
  });
}

export function setItem(key: string, value: any) {
  return new Promise<boolean>((resolve, reject) => {
    AsyncStorage.setItem(key, JSON.stringify(value), error => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });
}
