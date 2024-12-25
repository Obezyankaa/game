import {useEffect} from 'react';
import {AppState} from 'react-native';
import {getCurrentTheme, getTimeUntilNextThemeChange} from './themeConfig';
import {useThemeStore} from '../store/themeStore';

const useThemeUpdater = () => {
  const setTheme = useThemeStore(state => state.setTheme);
  const currentTheme = useThemeStore(state => state.theme);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    const updateTheme = () => {
      const newTheme = getCurrentTheme();
      if (newTheme !== currentTheme) {
        setTheme(newTheme, true); // Обновляем тему и сохраняем в AsyncStorage
      }

      // Устанавливаем таймер до следующего изменения темы
      const timeUntilNextChange = getTimeUntilNextThemeChange();
      timeout = setTimeout(updateTheme, timeUntilNextChange);
    };

    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        if (timeout) clearTimeout(timeout); // Очистить предыдущий таймер
        updateTheme(); // Обновить тему и установить новый таймер
      } else {
        if (timeout) clearTimeout(timeout); // Остановить таймер, если приложение неактивно
      }
    };

    // Добавляем подписку на изменения состояния приложения
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    // Запускаем обновление темы при первом рендере
    updateTheme();

    return () => {
      if (timeout) clearTimeout(timeout); // Очищаем таймер при размонтировании
      subscription.remove(); // Удаляем подписку
    };
  }, [currentTheme, setTheme]);
};

export default useThemeUpdater;
