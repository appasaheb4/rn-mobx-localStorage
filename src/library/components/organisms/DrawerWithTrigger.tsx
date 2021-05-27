import React from 'react';
import * as LibraryComponents from '@at/library/components';

interface TriggerProps {
  onPress: () => void;
}

interface ActionListDrawerProps {
  triggerElement: React.FunctionComponent<TriggerProps>;
  title: string;
}

const ActionListDrawer: React.FunctionComponent<ActionListDrawerProps> = props => {
  const [show, setShow] = React.useState(false);
  const TriggerComponent = props.triggerElement;
  return (
    <>
      <TriggerComponent
        onPress={() => {
          setShow(true);
        }}
      />
      <LibraryComponents.Molecules.BottomDrawer
        visible={show}
        onClose={() => setShow(false)}>
        <LibraryComponents.Atoms.Typography.Medium align="left">
          {props.title}
        </LibraryComponents.Atoms.Typography.Medium>
        <LibraryComponents.Atoms.Spacer multiplier={0.5} />
        {props.children}
      </LibraryComponents.Molecules.BottomDrawer>
    </>
  );
};

export default ActionListDrawer;
