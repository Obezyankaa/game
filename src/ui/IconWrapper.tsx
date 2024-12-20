import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import SettingsIcon from '../assets/SettingsIcon';
import ShareIcon from '../assets/SgareIcon';
import QuestionIcon from '../assets/QuestionIcon';
import BackArrowIcon from '../assets/BackArrowIcon';
import {useThemeStore} from '../store/themeStore';
import {themes} from '../constants/themeConfig';

// Определение типов пропсов
interface IconWrapperProps {
  iconType: 'settings' | 'share' | 'question' | 'back';
  onPress?: () => void;
}

const IconWrapper: React.FC<IconWrapperProps> = ({iconType, onPress}) => {
  const {theme} = useThemeStore();
  const currentTheme = themes[theme];
  // Выбор иконки на основе типа
  const renderIcon = () => {
    switch (iconType) {
      case 'settings':
        return <SettingsIcon />;
      case 'share':
        return <ShareIcon />;
      case 'question':
        return <QuestionIcon />;
      case 'back':
        return <BackArrowIcon />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconContainer, {backgroundColor: currentTheme.gray}]}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default IconWrapper;
