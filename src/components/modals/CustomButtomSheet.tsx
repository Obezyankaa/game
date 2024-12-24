/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import CustomText from '../CustomText';
import CrossIconWhite from '../../assets/CrossIconWhite';
import {StyledView} from './styles';
import {View} from 'react-native';
import {useThemeStore} from '../../store/themeStore';
import {themes} from '../../constants/themeConfig';

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

const CustomButtomSheet = () => {
  const {theme} = useThemeStore();
  const currentTheme = themes[theme];
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Можно:
  const modal1 = useBottomSheetStore(state => state.modal1);
  const close1 = useBottomSheetStore(state => state.close1);

  const snapPoints = modal1.count ? [modal1.count] : ['25%', '50%', '75%'];

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        close1();
      }
    },
    [close1],
  );

  useEffect(() => {
    if (modal1.isOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [modal1.isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      index={1}
      onChange={handleSheetChanges}
      enableContentPanningGesture={true}
      handleIndicatorStyle={{width: 40}}
      backdropComponent={RenderBackdrop}
      backgroundComponent={props => <BottomSheetBackground {...props} />}>
      <BottomSheetView>
        <StyledView>
          <CustomText
            content={modal1.title}
            variant="title"
            customStyle={{color: currentTheme.white}}
          />
          <CrossIconWhite onPress={close1} />
        </StyledView>
        {modal1.content}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomButtomSheet;
