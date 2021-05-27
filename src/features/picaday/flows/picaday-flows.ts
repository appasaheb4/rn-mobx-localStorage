import BaseFlowManager from '@at/library/modules/flow-manager';
import PicaDayEvents from './picaday-events';
import {Stores} from '../stores';
import * as Models from '../models';
import {Alert} from 'react-native';

class PicaDayFlows extends BaseFlowManager<Models.PicaDayRouteParams> {
  picaDay = () =>
    new Promise<Models.PicaDay>((resolve, reject) => {
      this.navigator.push('PicaDayList', undefined);
    });
  captureMoment = () =>
    new Promise<Models.PicaDay>((resolve, reject) => {
      console.log('capture');

      this.navigator.push('CaptureMoment', undefined);
    });
  temperature = () =>
    new Promise<Models.PicaDay>((resolve, reject) => {
      this.navigator.push('Temperature', undefined);
    });
}

export default new PicaDayFlows();
