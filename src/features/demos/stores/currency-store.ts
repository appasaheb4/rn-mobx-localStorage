import {action, observable, makeObservable} from 'mobx';
import {version, ignore} from 'mobx-sync';

@version(0.1)
class CurrencyStore {
  @ignore @observable curreny?: any;

  constructor() {
    makeObservable(this);
  }

  @action updateCurreny(crr: any) {
    this.curreny = crr;
  }
}

export default CurrencyStore;
