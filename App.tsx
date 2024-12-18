import * as React from 'react';
import RootStack from './src/navigation/RootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <RootStack />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
