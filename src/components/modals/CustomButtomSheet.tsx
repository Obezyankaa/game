import React, { useMemo } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';


const CustomButtomSheet = () => {
  const shapPoints = useMemo(() => ['25%', '50%', '70%'], []);
  return (
    <View style={styles.container}>
      <BottomSheet snapPoints={shapPoints}>
        <View>
          <Text>CustomButtomSheet</Text>
        </View>
      </BottomSheet>
    </View>
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

export default CustomButtomSheet;
