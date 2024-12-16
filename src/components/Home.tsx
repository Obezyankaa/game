import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useThemeStore} from '../store/themeStore';
import {themes} from '../constants/themeConfig';

const Home = () => {
  const {theme} = useThemeStore();
  const currentTheme = themes[theme];
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: currentTheme.backgroundColor},
      ]}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
