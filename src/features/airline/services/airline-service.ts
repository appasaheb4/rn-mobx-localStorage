//import * as Models from '../models';
import BaseService from '@at/library/modules/base-service';
import moment from 'moment';
import 'moment/locale/de';
//moment().locale('br', pt_br_moment).format('LLL');

class AirLineService extends BaseService {
  getAirLineList = () =>
    new Promise<any>((resolve, reject) => {
      try {
        moment.locale('de');
        this.client
          .get('/uploads/dummy-response.json')
          .then((res: any) => {
            const list: any[] = res.data;
            const result: Array<any> = [];
            const arrDate = list.reduce(function (r: any, a: any) {
              const keyDate = a.Date || 'Date';
              r[keyDate] = r[keyDate] || [];
              r[keyDate].push(a);
              return r;
            }, Object.create(null));
            Object.values(arrDate).forEach((item: any, index: any) => {
              const date = Object.keys(arrDate)[index];
              result.push({
                date: moment(date, 'DD/MM/YYYY')
                  .format('ddd DD MMM. YYYY')
                  .toLowerCase(),
                data: item,
              });
            });
            //console.log({arrDate});
            resolve(result);
            return;
          })
          .catch(error => {
            reject({error});
          });
      } catch (error) {}
    });
}

export default AirLineService;
