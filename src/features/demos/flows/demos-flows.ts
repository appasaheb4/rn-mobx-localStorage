import BaseFlowManager from '@at/library/modules/flow-manager';
import * as Models from '../models';

class BitcoinCurrencyFlows extends BaseFlowManager<Models.DemosRouterParams> {
  goBitcoinCurrency = () =>
    new Promise<any>((resolve, reject) => {
      this.navigator.push('BitcoinCurrency', undefined);
    });
  goStorage = () =>
    new Promise<any>((resolve, reject) => {
      this.navigator.push('Storage', undefined);
    });
  goAudioRecoader = () => {
    new Promise<any>((resolve, reject) => {
      this.navigator.push('AudioRecoader', undefined);
    });
  };
  goAuth = () => {
    new Promise<any>((resolve, reject) => {
      this.navigator.push('Auth', undefined);
    });
  };
  goCaputureMoment = () => {
    new Promise<any>((resolve, reject) => {
      this.navigator.push('CaputureMoment', undefined);
    });
  };
}

export default new BitcoinCurrencyFlows();
