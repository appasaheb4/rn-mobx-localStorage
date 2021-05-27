import React from 'react';
import * as LibraryComponents from '@at/library/components';
import * as Config from '@at/config';
import * as LibraryModels from '@at/library/models';

interface LoginButtonProps {
  color: Config.Styles.COLORS | string;
  onPress?: () => void;
  textColor?: Config.Styles.COLORS;
  icon?: string;
}

const LoginButton: React.FunctionComponent<LoginButtonProps> = props => {
  return (
    <LibraryComponents.Atoms.Button
      color={props.color as Config.Styles.COLORS}
      onPress={props.onPress}>
      <LibraryComponents.Molecules.WrappedView
        stack={LibraryModels.Component.StackDirection.Horizontal}
        justify="center"
        align="center">
        <LibraryComponents.Atoms.Icon
          icon={props.icon || ''}
          size="medium"
          color={props.textColor as Config.Styles.COLORS}
        />
        <LibraryComponents.Atoms.Typography.Regular color={props.textColor}>
          {`  ${props.children}`}
        </LibraryComponents.Atoms.Typography.Regular>
      </LibraryComponents.Molecules.WrappedView>
    </LibraryComponents.Atoms.Button>
  );
};

LoginButton.defaultProps = {
  textColor: Config.Styles.COLORS.WHITE,
};

export default LoginButton;
