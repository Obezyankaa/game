import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import SettingsIcon from './icon/SettingsIcon';
import ShareIcon from './icon/SgareIcon';
import QuestionIcon from './icon/QuestionIcon';
import BackArrowIcon from './icon/BackArrowIcon';

// Определение типов пропсов
interface IconWrapperProps {
  iconType: 'settings' | 'share' | 'question' | 'back';
  onPress?: () => void;
}

const IconWrapper: React.FC<IconWrapperProps> = ({iconType, onPress}) => {
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
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconWrapper;
