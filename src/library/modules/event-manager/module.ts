import {ParamListBase} from '@react-navigation/native';
import {DeviceEventEmitter} from 'react-native';

class BaseEventManager<T extends ParamListBase> {
  emitter = DeviceEventEmitter;

  emit = (eventName: keyof T, params?: T[keyof T]) => {
    console.log('EVENT_FIRE_START:', eventName);
    this.emitter.emit(eventName as string, params);
    console.log('EVENT_FIRE_COMPLETE:', eventName);
  };

  subscribe = (eventName: keyof T, listener: (params?: T[keyof T]) => void) => {
    this.emitter.addListener(eventName as string, listener);
  };
}

export default BaseEventManager;
