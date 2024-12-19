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

const BottomSheetBackground = ({style}: any) => {
  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          borderRadius: 40,
        },
        style,
      ]}
    />
  );
};

const CustomButtomSheet = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const {isOpen, title, content, close} = useBottomSheetStore();

  const snapPoints = ['25%', '50%', '75%'];

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        close();
      }
    },
    [close],
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={3}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      index={2}
      onChange={handleSheetChanges}
      enableContentPanningGesture={true}
      handleIndicatorStyle={{width: 40}}
      backdropComponent={renderBackdrop}
      backgroundComponent={props => <BottomSheetBackground {...props} />}>
      <BottomSheetView>
        <StyledView>
          <CustomText content={title} variant="title" />
          <CrossIconWhite onPress={() => close()} />
        </StyledView>
        {content}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomButtomSheet;
