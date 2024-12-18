import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {useThemeStore} from '../store/themeStore';
import {themes} from '../constants/themeConfig';

interface CustomViewProps {
  children: ReactNode;
}

const CustomView = ({children}: CustomViewProps) => {
  const {theme} = useThemeStore();
  const currentTheme = themes[theme];
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: currentTheme.backgroundColor},
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomView;
