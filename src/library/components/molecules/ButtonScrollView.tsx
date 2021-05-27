import React, {useState, useRef, useEffect} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import * as Config from '@at/config';
import WrappedView from './WrappedView';
import * as Models from '../../models';
import Icon from '../atoms/Icon';

interface ButtonScrollViewProps {
  actionVisible?: boolean;
  minHeight: number;
  maxHeight: number;
}

const ButtonScrollView: React.FC<ButtonScrollViewProps> = ({
  children,
  minHeight,
  actionVisible = false,
  maxHeight,
}) => {
  const [currScrollIndex, setScrollIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      y: currScrollIndex * (minHeight / 2),
      animated: true,
    });
  }, [currScrollIndex]);

  return (
    <WrappedView
      size={Models.Component.ElementSize.Block}
      gutter={Models.Component.Location.None}
      minHeight={minHeight}>
      <ScrollView
        ref={scrollViewRef}
        style={{height: minHeight}}
        scrollEnabled={false}>
        {children}
      </ScrollView>
      {actionVisible && (
        <View
          style={{
            position: 'absolute',
            flex: 1,
            justifyContent: 'space-between',
            top: '20%',
            right: 20,
            bottom: '20%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setScrollIndex(currScrollIndex - 1);
            }}
            disabled={currScrollIndex < 1}
            style={{
              backgroundColor:
                currScrollIndex > 0
                  ? Config.Styles.COLORS.WHITE
                  : 'transparent',
              borderRadius: 15,
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor:
                currScrollIndex > 0
                  ? Config.Styles.COLORS.BLACK
                  : 'transparent',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            }}>
            {currScrollIndex > 0 && (
              <Icon
                icon="chevron-up-outline"
                color={Config.Styles.COLORS.BLACK}
                size="medium"
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setScrollIndex(currScrollIndex + 1);
            }}
            disabled={
              !(currScrollIndex * (minHeight / 2) + minHeight < maxHeight)
            }
            style={{
              backgroundColor:
                currScrollIndex * (minHeight / 2) + minHeight < maxHeight
                  ? Config.Styles.COLORS.WHITE
                  : 'transparent',
              borderRadius: 15,
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor:
                currScrollIndex * (minHeight / 2) + minHeight < maxHeight
                  ? Config.Styles.COLORS.BLACK
                  : 'transparent',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            }}>
            {currScrollIndex * (minHeight / 2) + minHeight < maxHeight && (
              <Icon
                icon="chevron-down-outline"
                color={Config.Styles.COLORS.BLACK}
                size="medium"
              />
            )}
          </TouchableOpacity>
        </View>
      )}
    </WrappedView>
  );
};

export default ButtonScrollView;
