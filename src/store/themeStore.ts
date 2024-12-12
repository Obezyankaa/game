// themeStore.ts
import { create } from 'zustand';
import { getCurrentTheme, ThemeType } from '../constants/themeConfig';

interface ThemeState {
  theme: ThemeType;
}

export const useThemeStore = create<ThemeState>(set => {
  // Обновляем тему раз в час
  setInterval(() => {
    set({theme: getCurrentTheme()});
  }, 60 * 60 * 1000);

  return {
    theme: getCurrentTheme(),
  };
});
