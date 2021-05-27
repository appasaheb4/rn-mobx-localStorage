import React from 'react';
import * as Models from '../../models';
import {ImageBackground} from 'react-native';
import * as LibraryComponents from '@at/library/components';
import * as LibraryModels from '@at/library/models';
import * as Config from '@at/config';

interface PicaCardProps extends Models.PicaDay {}

const PicaCard: React.FunctionComponent<PicaCardProps> = props => (
  <>
    <LibraryComponents.Molecules.WrappedView minHeight={150}>
      <ImageBackground
        source={{uri: props.backgroundImage}}
        style={{flex: 1, resizeMode: 'contain', justifyContent: 'center'}}>
        <LibraryComponents.Molecules.WrappedView
          gutter={LibraryModels.Component.Location.All}
          gutterMultiplier={0.6}>
          <LibraryComponents.Molecules.WrappedView
            size={LibraryModels.Component.ElementSize.Auto}>
            <LibraryComponents.Atoms.Typography.Regular
              color={Config.Styles.COLORS.WHITE}>
              {`${props.date}`}
            </LibraryComponents.Atoms.Typography.Regular>
          </LibraryComponents.Molecules.WrappedView>

          <LibraryComponents.Molecules.WrappedView
            stack={LibraryModels.Component.StackDirection.Horizontal}
            size={LibraryModels.Component.ElementSize.Block}
            align="flex-end"
            justify="space-between">
            <LibraryComponents.Molecules.WrappedView
              stack={LibraryModels.Component.StackDirection.Horizontal}
              size={LibraryModels.Component.ElementSize.Block}
              align="center">
              <LibraryComponents.Atoms.Icon
                icon="ri-map-pin-3-line"
                size={15}
                color={Config.Styles.COLORS.WHITE}
              />
              <LibraryComponents.Atoms.Typography.Small
                color={Config.Styles.COLORS.WHITE}>
                {`${props.location}`}
              </LibraryComponents.Atoms.Typography.Small>
            </LibraryComponents.Molecules.WrappedView>
            <LibraryComponents.Molecules.WrappedView
              stack={LibraryModels.Component.StackDirection.Horizontal}
              size={LibraryModels.Component.ElementSize.Block}
              align="center">
              <LibraryComponents.Atoms.Typography.Small
                color={Config.Styles.COLORS.WHITE}>
                {`${props.temperature}`}
              </LibraryComponents.Atoms.Typography.Small>
              <LibraryComponents.Atoms.Icon
                icon="ri-sun-line"
                size={15}
                color={Config.Styles.COLORS.WHITE}
              />
            </LibraryComponents.Molecules.WrappedView>
          </LibraryComponents.Molecules.WrappedView>
        </LibraryComponents.Molecules.WrappedView>
      </ImageBackground>
    </LibraryComponents.Molecules.WrappedView>
  </>
);

export default PicaCard;
