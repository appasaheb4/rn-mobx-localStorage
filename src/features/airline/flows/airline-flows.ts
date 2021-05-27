import BaseFlowManager from '@at/library/modules/flow-manager';
import * as Models from '../models';

class PicaDayFlows extends BaseFlowManager<Models.AirLineRouteParams> {
  airLine = () =>
    new Promise<Models.AirLine>((resolve, reject) => {
      this.navigator.push('AirLineList', undefined);
    });
}

export default new PicaDayFlows();
