import {action, observable, makeObservable} from 'mobx';
import {version, ignore} from 'mobx-sync';
import * as Models from '../models';

@version(0.1)
class LocalStore {
  @ignore @observable user?: Models.User;
  @observable userList?: Models.User[] = [];
  @ignore @observable counter: number = 0.0;
  @observable audioList: string[] = [];
  @observable authUser?: any;

  constructor() {
    makeObservable(this);
  }

  @action updateUser(user: any) {
    this.user = user;
  }
  @action updateUserList(user: any) {
    console.log({user});

    this.userList?.push(user);
  }
  @action clearUser() {
    this.user = undefined;
  }

  @action updateCounter(count: number) {
    this.counter = count;
  }
  @action updateAudioList(audio: string) {
    this.audioList.push(audio);
  }
  @action updateAuthUser(user: any) {
    this.authUser = user;
  }
}

export default LocalStore;
