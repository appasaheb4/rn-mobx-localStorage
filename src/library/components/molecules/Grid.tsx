import React from 'react';
import * as Config from '@at/config';
import {View} from 'react-native';

const GridContext = React.createContext(1);

interface GridProps {
  gutterMultiplier: number;
}

const Grid: React.FunctionComponent<GridProps> = props => {
  const gutter = props.gutterMultiplier * Config.Styles.MEASURE.GUTTER;
  return (
    <GridContext.Provider value={gutter}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: -gutter / 2,
          marginRight: -gutter / 2,
          alignItems: 'stretch',
          flexShrink: 1,
          flexWrap: 'wrap',
        }}>
        {props.children}
      </View>
    </GridContext.Provider>
  );
};

interface GridItemProps {
  span: number;
  justify?: 'flex-start' | 'center' | 'flex-end';
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
}

const GridItem: React.FunctionComponent<GridItemProps> = props => {
  const gutterContext = React.useContext(GridContext);

  return (
    <View
      style={{
        paddingLeft: gutterContext / 2,
        paddingRight: gutterContext / 2,
        width: `${(100 * props.span) / 12}%`,
        justifyContent: props.justify,
        alignItems: props.align,
      }}>
      {props.children}
    </View>
  );
};

export {GridItem};
export default Grid;
