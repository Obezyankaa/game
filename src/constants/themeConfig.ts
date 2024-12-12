// themeConfig.ts
export type ThemeType = 'morning' | 'day' | 'evening' | 'night';

export interface Theme {
  backgroundColor: string;
  textColor: string;
}

export const themes: Record<ThemeType, Theme> = {
  morning: {backgroundColor: '#FFFAE3', textColor: '#333'},
  day: {backgroundColor: '#FFF', textColor: '#000'},
  evening: {backgroundColor: '#FBE7C6', textColor: '#333'},
  night: {backgroundColor: '#2C3E50', textColor: '#FFF'},
};

export const getCurrentTheme = (): ThemeType => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'day';
  if (hour >= 18 && hour < 21) return 'evening';
  return 'night';
};
