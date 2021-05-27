import BaseEventManager from '@at/library/modules/event-manager';

type RouterEventParams = {
  routerChange: {screenName: string; params: object | undefined};
};

export default new BaseEventManager<RouterEventParams>();
