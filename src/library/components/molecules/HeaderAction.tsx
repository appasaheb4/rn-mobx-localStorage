import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as Config from '@at/config';
import * as Typography from '../atoms/Typography';

interface HeaderActionProps {
  onPress?: () => void;
  color?: Config.Styles.COLORS;
}

const HeaderAction: React.FunctionComponent<HeaderActionProps> = props => (
  <TouchableOpacity
    style={{marginRight: Config.Styles.MEASURE.GUTTER, marginTop: 5}}
    onPress={props.onPress}>
    <Typography.Small color={props.color}>{props.children}</Typography.Small>
  </TouchableOpacity>
);

export default HeaderAction;
