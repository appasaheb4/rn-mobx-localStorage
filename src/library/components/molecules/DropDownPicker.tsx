import React from 'react';
import WrappedView from './WrappedView';
import {Picker} from 'react-native';
import * as Config from '@at/config';
import * as Models from '../../models';

interface PickerProps {
  items: any[];
  value?: any;
  onChange?: (item: any, index: number) => void;
  color?: Config.Styles.COLORS;
  borderWidth?: number;
}

const DropDownPicker: React.FunctionComponent<PickerProps> = props => (
  <>
    <WrappedView
      size={Models.Component.ElementSize.Block}
      gutter={Models.Component.Location.None}
      gutterMultiplier={0.2}
      rounded={Models.Component.Location.All}
      border={{
        location: Models.Component.Location.All,
        size: 1,
        color: Config.Styles.COLORS.BLACK,
      }}>
      <Picker
        selectedValue={props.value}
        onValueChange={(itemValue, itemIndex) =>
          props.onChange && props.onChange(itemValue, itemIndex)
        }>
        {props.items.map((item: any) => (
          <Picker.Item label={item.lable} value={item.value} />
        ))}
      </Picker>
    </WrappedView>
  </>
);

export default DropDownPicker;
