import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import ArrowWhiteIcon from '../assets/arrow-white';
import { useThemeStore } from '../store/themeStore';
import { themes } from '../constants/themeConfig';

interface UniversalComponentProps {
  text?: string; // Текст для отображения
  label?: string; // Альтернативный текст для кнопки
  initialValue?: boolean; // Начальное значение для Switch
  onToggle?: (value: boolean) => void; // Обработчик изменения состояния для Switch
  onPress?: () => void; // Обработчик нажатия для TouchableOpacity
}

const UniversalComponent: React.FC<UniversalComponentProps> = ({
  text,
  label,
  initialValue = false,
  onToggle,
  onPress,
}) => {
    const [isEnabled, setIsEnabled] = useState(initialValue);
    const {theme} = useThemeStore();
    const currentTheme = themes[theme];

  const handleToggle = (value: boolean) => {
    setIsEnabled(value);
    if (onToggle) {
      onToggle(value);
    }
  };

  const isSwitchComponent = !!onToggle; // Если передан обработчик onToggle – показываем Switch

  return (
    <View style={styles.container}>
      {isSwitchComponent ? (
        <View style={styles.switchContainer}>
          <Text style={styles.text}>{text || 'Текст не передан'}</Text>
          <Switch
            value={isEnabled}
            onValueChange={handleToggle}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            trackColor={{false: '#767577', true: '#81b0ff'}}
          />
        </View>
      ) : (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
          <Text style={styles.text}>{label || 'Label не передан'}</Text>
          <ArrowWhiteIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default UniversalComponent;
