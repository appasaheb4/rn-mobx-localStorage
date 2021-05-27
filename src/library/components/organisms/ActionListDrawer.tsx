import React from 'react';
import * as LibraryComponents from '@at/library/components';
import * as Config from '@at/config';

interface TriggerProps {
  onPress: () => void;
}

interface ActionListDrawerProps {
  options: LibraryComponents.Molecules.ItemWithTextProps[];
  triggerElement: React.FunctionComponent<TriggerProps>;
  title: string;
  item?: React.ReactNode;
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
        <LibraryComponents.Atoms.Spacer multiplier={1} />
        {props.options?.map(option => (
          <>
            <LibraryComponents.Molecules.ItemWithText
              {...option}
              onPress={() => {
                setShow(false);
                option.onPress && option.onPress();
              }}
              item={
                option.item ? (
                  option.item
                ) : (
                  <LibraryComponents.Atoms.CircleButton
                    size="medium"
                    background={Config.Styles.COLORS.GREY_1}
                  />
                )
              }
            />
            <LibraryComponents.Atoms.Spacer multiplier={0.5} />
          </>
        ))}
      </LibraryComponents.Molecules.BottomDrawer>
    </>
  );
};

export default ActionListDrawer;
