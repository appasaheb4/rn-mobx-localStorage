import React from 'react';
import {View} from 'react-native';

import * as Config from '@at/config';

interface SpacerProps {
  multiplier?: number;
}

const Spacer: React.FunctionComponent<SpacerProps> = (props: SpacerProps) => {
  return (
    <View
      style={{height: Config.Styles.MEASURE.GUTTER * (props.multiplier || 1)}}
    />
  );
};

Spacer.defaultProps = {
  multiplier: 1,
};

export default Spacer;
