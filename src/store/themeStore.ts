import {create} from 'zustand';
import { getCurrentTheme, ThemeType } from '../constants/themeConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeStore {
  theme: ThemeType;
  setTheme: (theme: ThemeType, persist?: boolean) => void;
  loadTheme: () => Promise<void>;
}

export const useThemeStore = create<ThemeStore>(set => ({
  theme: 'blue', // начальное значение
  setTheme: async (theme, persist = false) => {
    if (persist) await AsyncStorage.setItem('currentTheme', theme);
    set({theme});
  },
  loadTheme: async () => {
    const storedTheme = await AsyncStorage.getItem('currentTheme');
    if (storedTheme) {
      set({theme: storedTheme as ThemeType});
    } else {
      const defaultTheme = getCurrentTheme();
      set({theme: defaultTheme});
    }
  },
}));
