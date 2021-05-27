import React from 'react';
import * as Config from '@at/config';
import * as LibraryModels from '@at/library/models';
import WrappedView from './WrappedView';
import {Typography, Spacer} from '../atoms';
import {TouchableOpacity} from 'react-native';

export interface ItemWithTextProps {
  title?: string;
  description?: string;
  item?: React.ReactNode;
  onPress?: () => void;
}

const ItemWithText: React.FunctionComponent<ItemWithTextProps> = props => {
  if (!props.onPress) {
    return (
      <WrappedView
        stack={LibraryModels.Component.StackDirection.Horizontal}
        size={LibraryModels.Component.ElementSize.Block}
        align="center">
        {props.item}
        <WrappedView
          shrink
          margin={LibraryModels.Component.Location.Left}
          marginMultiplier={0.5}
          size={LibraryModels.Component.ElementSize.Auto}>
          <Typography.Regular bold>{props.title}</Typography.Regular>
          <Spacer multiplier={0.2} />
          <Typography.Small color={Config.Styles.COLORS.GREY_1}>
            {props.description}
          </Typography.Small>
        </WrappedView>
      </WrappedView>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <WrappedView
        stack={LibraryModels.Component.StackDirection.Horizontal}
        size={LibraryModels.Component.ElementSize.Block}
        align="center">
        {props.item}
        <WrappedView
          shrink
          margin={LibraryModels.Component.Location.Left}
          marginMultiplier={0.5}
          size={LibraryModels.Component.ElementSize.Auto}>
          <Typography.Regular bold>{props.title}</Typography.Regular>
          <Spacer multiplier={0.2} />
          {props.description !== '' && (
            <Typography.Small color={Config.Styles.COLORS.GREY_1}>
              {props.description}
            </Typography.Small>
          )}
        </WrappedView>
      </WrappedView>
    </TouchableOpacity>
  );
};

export default ItemWithText;
