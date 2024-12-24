// components/CustomBottomSheet2.tsx
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import {StyledView} from './styles';
import CustomText from '../CustomText';
import {useThemeStore} from '../../store/themeStore';
import {themes} from '../../constants/themeConfig';
import {View} from 'react-native';
import CrossIconWhite from '../../assets/CrossIconWhite';

const BottomSheetBackground = ({style}: any) => {
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

const RenderBackdrop = (props: any) => (
  <BottomSheetBackdrop appearsOnIndex={3} disappearsOnIndex={-1} {...props} />
);

const CustomBottomSheet2 = () => {
    const {theme} = useThemeStore();
    const currentTheme = themes[theme];
    const bottomSheetRef = useRef<BottomSheetModal>(null);

  // Можно:
  const modal2 = useBottomSheetStore(state => state.modal2);
  const close2 = useBottomSheetStore(state => state.close2);

  const snapPoints = modal2.count ? [modal2.count] : ['25%', '50%', '75%'];

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        close2();
      }
    },
    [close2],
  );

  useEffect(() => {
    if (modal2.isOpen) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [modal2.isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      onChange={handleSheetChanges}
      stackBehavior="push"
      handleIndicatorStyle={{width: 40}}
      backdropComponent={RenderBackdrop}
      backgroundComponent={props => <BottomSheetBackground {...props} />}>
      <BottomSheetView>
        <StyledView>
          <CustomText
            content={modal2.title}
            variant="title"
            customStyle={{color: currentTheme.white}}
          />
          <CrossIconWhite onPress={close2} />
        </StyledView>
        {modal2.content}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomBottomSheet2;
