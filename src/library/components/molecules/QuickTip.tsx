import React from 'react';
import WrappedView from './WrappedView';
import {Typography, Spacer} from '../atoms';
import * as Models from '../../models';
import * as Config from '@at/config';

interface QuickTipProps {
  title?: string;
}

const QuickTip: React.FunctionComponent<QuickTipProps> = props => (
  <>
    <WrappedView
      gutter={Models.Component.Location.All}
      margin={Models.Component.Location.Horizontal}
      marginMultiplier={0.5}
      gutterMultiplier={0.75}
      rounded={Models.Component.BorderLocation.All}
      background={Config.Styles.COLORS.PRIMARY}
      size={Models.Component.ElementSize.Block}>
      <Typography.Small bold color={Config.Styles.COLORS.WHITE}>
        {props.title || 'Quick Tip'}
      </Typography.Small>
      <Spacer multiplier={0.25} />
      <Typography.Small footNote color={Config.Styles.COLORS.WHITE}>
        {props.children}
      </Typography.Small>
    </WrappedView>
  </>
);

export default QuickTip;
