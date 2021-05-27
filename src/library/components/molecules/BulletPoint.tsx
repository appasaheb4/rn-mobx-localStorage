import React from 'react';
import {View} from 'react-native';
import {Location, StackDirection} from '@at/library/models/component';
import WrappedView from './WrappedView';
import {Typography} from '../atoms';
import * as Config from '@at/config';

interface IBulletPointProps {
  title: string;
  description?: string;
  number: number;
  margin?: Location;
}

const BulletPoint = (props: IBulletPointProps) => (
  <WrappedView
    shrink
    margin={props.margin}
    stack={StackDirection.Horizontal}
    align="center">
    <View
      style={{
        width: 20,
        height: 20,
        backgroundColor: Config.Styles.COLORS.PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        marginRight: 6,
        marginTop: -2,
      }}>
      <Typography.Small footNote color={Config.Styles.COLORS.WHITE}>
        {props.number}
      </Typography.Small>
    </View>
    <WrappedView>
      <Typography.Regular
        align="left"
        bold={true}
        color={Config.Styles.COLORS.GREY_1}>
        {props.title}
      </Typography.Regular>
      {props.description && (
        <Typography.Small align="left" color={Config.Styles.COLORS.GREY_1}>
          {props.description}
        </Typography.Small>
      )}
    </WrappedView>
  </WrappedView>
);

export default BulletPoint;
