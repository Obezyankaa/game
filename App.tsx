import * as React from 'react';
import RootStack from './src/navigation/RootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useThemeStore } from './src/store/themeStore';
import useThemeUpdater from './src/constants/useThemeUpdater';

const useInitializeTheme = () => {
  const loadTheme = useThemeStore(state => state.loadTheme);
  React.useEffect(() => {
    loadTheme();
  }, [loadTheme]);
};

export default function App() {
  useInitializeTheme(); // Инициализация темы
  useThemeUpdater(); // Обновление темы каждый час
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <RootStack />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
