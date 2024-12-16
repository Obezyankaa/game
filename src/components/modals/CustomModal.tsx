import React, {useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {Text} from 'react-native';

const CustomModal = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoint = useMemo(() => ['25%', '50%', '75%'], []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet snapPoints={snapPoint} ref={bottomSheetRef}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});

export default CustomModal;
