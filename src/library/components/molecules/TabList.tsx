import React from 'react';
import * as Config from '@at/config';
import WrappedView from './WrappedView';
import Grid, {GridItem} from './Grid';
import {Pill} from '../atoms';
import * as Models from '../../models';

interface TabListProps {
  tabs?: Array<string>;
  onChange: (tab: string) => void;
  value?: string;
}

const TabList: React.FunctionComponent<TabListProps> = props => (
  <WrappedView
    gutter={Models.Component.Location.Vertical}
    gutterMultiplier={0.75}
    background={Config.Styles.COLORS.WHITE}
    size={Models.Component.ElementSize.Block}>
    <WrappedView
      gutter={Models.Component.Location.Horizontal}
      gutterMultiplier={0.25}
      background={Config.Styles.COLORS.WHITE}
      size={Models.Component.ElementSize.Block}>
      <Grid gutterMultiplier={0.5}>
        {props.tabs?.map(tab => (
          <GridItem span={12 / (props.tabs?.length || 1)}>
            <Pill
              fill
              onPress={() => {
                props.onChange && props.onChange(tab);
              }}
              size="large"
              textColor={
                props.value === tab
                  ? Config.Styles.COLORS.WHITE
                  : Config.Styles.COLORS.BLACK
              }
              color={
                props.value === tab
                  ? Config.Styles.COLORS.PRIMARY
                  : Config.Styles.COLORS.LIGHT_1
              }>
              {tab}
            </Pill>
          </GridItem>
        ))}
      </Grid>
    </WrappedView>
  </WrappedView>
);

export default TabList;
