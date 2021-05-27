import {ParamListBase} from '@react-navigation/native';
import Navigator from '../navigator';

class BaseFlowManager<T extends ParamListBase> {
  navigator: Navigator<T>;

  constructor() {
    this.navigator = new Navigator<T>();
  }
}

export default BaseFlowManager;
