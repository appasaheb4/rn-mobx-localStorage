import React from 'react';
import {TouchableOpacity, Modal} from 'react-native';
import {WrappedView} from '../molecules';
import * as Config from '@at/config';
import * as LibraryModels from '../../models';
import KeyboardAvoidingWrapper from '../organisms/KeyboardAvoidingWrapper';

interface BottomDrawerProps {
  title?: string;
  visible: boolean;
  onClose?: () => void;
  background?: Config.Styles.COLORS;
}

const BottomDrawer: React.FunctionComponent<BottomDrawerProps> = props => (
  <Modal
    visible={props.visible}
    animationType="slide"
    style={{zIndex: 99}}
    transparent
    onDismiss={() => props.onClose && props.onClose()}
    onRequestClose={() => props.onClose && props.onClose()}>
    <KeyboardAvoidingWrapper style={{flex: 1}} noOffset>
      <TouchableOpacity
        style={{flex: 1, zIndex: 99, backgroundColor: 'rgba(0,0,0,0.5)'}}
        onPress={() => {
          props.onClose && props.onClose();
        }}>
        <WrappedView
          position="absolute"
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
          }}
          rounded={LibraryModels.Component.BorderLocation.TopOnly}
          background={props.background || Config.Styles.COLORS.WHITE}
          size={LibraryModels.Component.ElementSize.Block}
          gutter={LibraryModels.Component.Location.All}>
          {props.children}
        </WrappedView>
      </TouchableOpacity>
    </KeyboardAvoidingWrapper>
  </Modal>
);

export default BottomDrawer;
