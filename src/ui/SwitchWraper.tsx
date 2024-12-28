import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

interface SwitchWrapperProps {
  text: string; // Текст, который будет отображаться
  initialValue?: boolean; // Начальное состояние переключателя
  onToggle?: (value: boolean) => void; // Обработчик изменения состояния
}

const SwitchWrapper: React.FC<SwitchWrapperProps> = ({
  text,
  initialValue = false,
  onToggle,
}) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const handleToggle = (value: boolean) => {
    setIsEnabled(value);
    if (onToggle) {
      onToggle(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Switch
        value={isEnabled}
        onValueChange={handleToggle}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        trackColor={{false: '#767577', true: '#81b0ff'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default SwitchWrapper;
