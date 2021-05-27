import React from 'react';

import AirLineStore from './airline-store';

export const Stores = {
  airLineStore: new AirLineStore(),
};

export const Contexts = {
  airLineContext: React.createContext(Stores.airLineStore),
};
