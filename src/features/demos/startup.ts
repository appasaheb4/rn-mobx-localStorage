import hydrateStore from '@at/library/modules/startup';
import * as Database from '@at/library/modules/storage/database-manager';
//import _ from 'lodash';
import {Stores} from './stores';
const startup = async () => {
  Database.initialize();
  await hydrateStore('localStore', Stores.localStore);
};

export default startup;
