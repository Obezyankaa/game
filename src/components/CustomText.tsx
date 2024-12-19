import {Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';

// Определение типов пропсов
type CustomTextProps = {
  content?: string;
  variant?: 'default' | 'title' | 'subtitle' | 'highlight';
  customStyle?: TextStyle;
};

const CustomText: React.FC<CustomTextProps> = ({
  content = 'Default Text',
  variant = 'default',
  customStyle,
}) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'title':
        return styles.title;
      case 'subtitle':
        return styles.subtitle;
      case 'highlight':
        return styles.highlight;
      default:
        return styles.defaultText;
    }
  };

  return <Text style={[getVariantStyle(), customStyle]}>{content}</Text>;
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
  },
  highlight: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600',
  },
});

export default CustomText;
