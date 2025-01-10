import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import ArrowWhiteIcon from '../assets/arrow-white';
import {useThemeStore} from '../store/themeStore';
import {themes} from '../constants/themeConfig';

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
    <View style={[styles.container, {backgroundColor: currentTheme.gray}]}>
      {isSwitchComponent ? (
        <View style={styles.switchContainer}>
          <Text style={styles.text}>{text || 'Текст не передан'}</Text>
          <View style={styles.switchWrap}>
            <Switch
              value={isEnabled}
              onValueChange={handleToggle}
              style={styles.switch}
            />
          </View>
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 1,
    marginBottom: 1,
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
  switchWrap: {
    width: 60, // ширина кастомной оболочки
    height: 40, // высота контейнера
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    transform: [{scaleX: 1}, {scaleY: 1}], // увеличение размера самого Switch
  },
});

export default UniversalComponent;
