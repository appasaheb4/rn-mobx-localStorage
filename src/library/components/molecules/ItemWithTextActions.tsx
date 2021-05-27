import React from 'react';
import * as Config from '@at/config';
import * as LibraryModels from '@at/library/models';
import WrappedView from './WrappedView';
import {Typography, Spacer} from '../atoms';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';

interface ActionProps {
  text: string;
  onPress: () => void;
}

export interface ItemWithTextActionsProps {
  title?: string;
  description?: string;
  item?: React.ReactNode;
  actions?: ActionProps[];
}

const ItemWithTextActions: React.FunctionComponent<ItemWithTextActionsProps> = props => {
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
        <Typography.Small footNote color={Config.Styles.COLORS.GREY_1}>
          {props.description}
        </Typography.Small>
      </WrappedView>
      <View
        style={{
          width: '20%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        {props.actions?.map(action => (
          <TouchableOpacity onPress={action.onPress}>
            <WrappedView
              shrink
              size={LibraryModels.Component.ElementSize.Block}>
              <Typography.Small color={Config.Styles.COLORS.PRIMARY}>
                {action.text}
              </Typography.Small>
            </WrappedView>
          </TouchableOpacity>
        ))}
      </View>
    </WrappedView>
  );
};

export default ItemWithTextActions;
