import {action, observable, makeObservable} from 'mobx';
import {version, ignore} from 'mobx-sync';
import * as Models from '../models';

@version(0.1)
class CaputureStore {
  @observable isCameraOpen?: boolean = true;
  @observable isFlashMode?: boolean = false;
  @observable isCameraTypeBack?: boolean = true;

  constructor() {
    makeObservable(this);
  }
  @action updateCameraOpen(status: boolean) {
    this.isCameraOpen = status;
  }
  @action updateFlash(staus: boolean) {
    this.isFlashMode = staus;
  }
  @action updateCameraType(type: boolean) {
    this.isCameraTypeBack = type;
  }
}

export default CaputureStore;
