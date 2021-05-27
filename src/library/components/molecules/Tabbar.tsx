import React from 'react';
import * as Config from '@at/config';
import WrappedView from './WrappedView';
import Icon from '../atoms/Icon';
import CircleButton from '../atoms/CircleButton';
import * as Models from '../../models';
import Pill from '../atoms/Pill';

interface TabBarProps {
  tabs?: Array<string>;
  onPicaDay?: () => void;
  onCaptureMoment?: () => void;
  onTemerature?: () => void;
}

const Tabbar: React.FunctionComponent<TabBarProps> = props => (
  <>
    <WrappedView
      align="flex-end"
      justify="space-around"
      size={Models.Component.ElementSize.Block}
      minHeight={40}
      stack={Models.Component.StackDirection.Horizontal}>
      <Pill
        onPress={() => props.onPicaDay && props.onPicaDay()}
        color={Config.Styles.COLORS.WHITE}
        alignItems="center">
        <Icon icon="home-fill" size={24} color={Config.Styles.COLORS.BLACK} />
      </Pill>

      <CircleButton
        background={Config.Styles.COLORS.WHITE}
        elevation={2}
        marginTop={-70}
        size={48}
        onPress={() => {
          props.onCaptureMoment && props.onCaptureMoment();
        }}>
        <Icon
          icon="ri-add-line"
          size={24}
          color={Config.Styles.COLORS.SECONDARY}
        />
      </CircleButton>
      <Pill
        onPress={() => props.onTemerature && props.onTemerature()}
        color={Config.Styles.COLORS.WHITE}>
        <Icon
          icon="ri-information-line"
          size={24}
          color={Config.Styles.COLORS.BLACK}
        />
      </Pill>
    </WrappedView>
  </>
);

export default Tabbar;
