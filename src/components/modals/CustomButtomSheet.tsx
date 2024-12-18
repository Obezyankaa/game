import React, {useCallback, useEffect, useRef} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useBottomSheetStore } from '../../store/useBottomSheetStore';

const CustomButtomSheet = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const {isOpen, title, content, close} = useBottomSheetStore();

  const snapPoints = ['25%', '50%', '75%'];

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) close(); // Закрыть, если модальное окно закрыто
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
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={styles.contentContainer}>
        <View>
          <Text>{title} 🎉</Text>
          {content}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CustomButtomSheet;
