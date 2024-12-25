// themeConfig.ts
export type ThemeType = 'blue' | 'pink' | 'darkRed' | 'darkBlue';

export interface Theme {
  white: string;
  dark: string;
  gray: string;
  gray2: string;
  fig: string;
  willow: string;
  pine: string;
}

export const themes: Record<ThemeType, Theme> = {
  blue: {
    white: '#F7F6F2',
    dark: '#043B5F',
    gray: '#FFFFFF',
    gray2: '#FFFFFF',
    fig: '#FFFFFF',
    willow: '#6EAFFD',
    pine: '#FFFFFF',
  },
  pink: {
    white: '#FFF5F9',
    dark: '#5C4642',
    gray: '#FFFFFF',
    gray2: '#FFFFFF',
    fig: '#FFFFFF',
    willow: '#FEA3C9',
    pine: '#FFFFFF',
  },
  darkRed: {
    white: '#EDEDED',
    dark: '#FFFFFF',
    gray: '#FFFFFF',
    gray2: '#FFFFFF',
    fig: '#FFFFFF',
    willow: '#EF343F',
    pine: '#FFFFFF',
  },
  darkBlue: {
    white: '#EDEDED',
    dark: '#16181D',
    gray: '#282A2E',
    gray2: '#4D4E52',
    fig: '#11215B',
    willow: '#2D6DEE',
    pine: '#BBC7F5',
  },
};

export const getCurrentTheme = (): ThemeType => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'blue';
  if (hour >= 12 && hour < 18) return 'pink';
  if (hour >= 18 && hour < 21) return 'darkRed';
  return 'darkBlue';
};

export const getTimeUntilNextThemeChange = (): number => {
  const now = new Date();
  const nextHour = new Date(now);
  nextHour.setMinutes(0, 0, 0); // Обнуляем минуты, секунды и миллисекунды
  nextHour.setHours(now.getHours() + 1); // Переходим на следующий час
  return nextHour.getTime() - now.getTime(); // Разница в миллисекундах
};


