import {AsyncTrunk} from 'mobx-sync';
import AsyncStorage from '@react-native-community/async-storage';
//import * as Database from '@at/library/modules/storage/database-manager';

const hydrateStore = async (key: string, storeInstance: any) => {
  try {
    const trunk = new AsyncTrunk(storeInstance, {
      storage: AsyncStorage as any,
      storageKey: `__persist_mobx_stores_${key}__`,
      delay: 1e3,
    });
    await trunk.init();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default hydrateStore;
