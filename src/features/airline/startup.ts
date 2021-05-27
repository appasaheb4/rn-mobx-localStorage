//import hydrateStore from '@at/library/modules/startup';
//import _ from 'lodash';
import {Stores} from '@at/features/airline/stores';
const startup = async () => {
  console.log('startup picaday');
  Stores.airLineStore.fetchAirLines();
};

export default startup;
