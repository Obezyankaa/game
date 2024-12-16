import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import SettingsIcon from './icon/SettingsIcon';
import ShareIcon from './icon/SgareIcon';
import QuestionIcon from './icon/QuestionIcon';
import BackArrowIcon from './icon/BackArrowIcon';
import {useThemeStore} from '../../store/themeStore';
import {themes} from '../../constants/themeConfig';

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
      style={[
        styles.iconContainer,
        {backgroundColor: currentTheme.iconbackgroundColor},
      ]}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
  },
});

export default IconWrapper;
