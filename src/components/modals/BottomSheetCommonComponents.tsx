// components/modals/BottomSheetCommonComponents.tsx
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useThemeStore} from '../../store/themeStore';
import {themes} from '../../constants/themeConfig';

/**
 * Общий фон шторки
 */
export const BottomSheetBackground = ({style}: any) => {
  const {theme} = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <View
      style={[
        {
          backgroundColor: currentTheme.dark,
          borderRadius: 40,
        },
        style,
      ]}
    />
  );
};

/**
 * Общий backdrop
 */
export const RenderBackdrop = (props: any) => (
  <BottomSheetBackdrop appearsOnIndex={3} disappearsOnIndex={-1} {...props} />
);
