import React from 'react';

import PicaDayStore from './picaday-store';

export const Stores = {
  picaDayStore: new PicaDayStore(),
};

export const Contexts = {
  picaDayContext: React.createContext(Stores.picaDayStore),
};
