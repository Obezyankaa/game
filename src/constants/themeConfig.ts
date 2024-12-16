// themeConfig.ts
export type ThemeType = 'morning' | 'day' | 'evening' | 'night';

export interface Theme {
  backgroundColor: string;
  textColor: string;
  iconbackgroundColor: string;
}

export const themes: Record<ThemeType, Theme> = {
  morning: {
    backgroundColor: 'orange',
    textColor: '#333',
    iconbackgroundColor: '#ADD8E6',
  },
  day: {
    backgroundColor: 'green',
    textColor: '#000',
    iconbackgroundColor: '#87CEEB',
  },
  evening: {
    backgroundColor: 'pink',
    textColor: '#333',
    iconbackgroundColor: '#FF7F50',
  },
  night: {
    backgroundColor: 'black',
    textColor: '#FFF',
    iconbackgroundColor: '#000080',
  },
};

export const getCurrentTheme = (): ThemeType => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'day';
  if (hour >= 18 && hour < 21) return 'evening';
  return 'night';
};
