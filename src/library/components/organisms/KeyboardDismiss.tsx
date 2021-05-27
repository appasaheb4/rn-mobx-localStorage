import React from 'react';
import {TouchableWithoutFeedback, View, Keyboard} from 'react-native';

const KeyboardDismiss: React.FunctionComponent = props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardDismiss;
