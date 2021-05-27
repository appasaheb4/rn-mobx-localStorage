import React from 'react';

import CurrencyStore from './currency-store';
import LocalStore from './local-store';
import CaputureStore from './caupture-store';

export const Stores = {
  currencyStore: new CurrencyStore(),
  localStore: new LocalStore(),
  caputureStore: new CaputureStore(),
};

export const Contexts = {
  currencyContext: React.createContext(Stores.currencyStore),
  localContext: React.createContext(Stores.localStore),
  caputureContext: React.createContext(Stores.caputureStore),
};
