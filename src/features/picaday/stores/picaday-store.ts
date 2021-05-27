import {action, observable, computed, makeObservable} from 'mobx';
import {version, ignore} from 'mobx-sync';
import * as Models from '../models';
import * as Services from '../services';

@version(0.1)
class PicaDayStore {
  @observable picaDayList: Models.PicaDay[] = [];

  constructor() {
    makeObservable(this);
  }

  @action updatePicaDay(item: any) {
    this.picaDayList.push(item);
  }
}

export default PicaDayStore;
