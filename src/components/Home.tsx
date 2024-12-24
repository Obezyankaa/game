import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useThemeStore} from '../store/themeStore';
import {themes} from '../constants/themeConfig';
import CustomButtomSheet from './modals/CustomButtomSheet';
import CustomBottomSheet2 from './modals/CustomBottomSheet2';

const Home = () => {
  const {theme} = useThemeStore();
  const currentTheme = themes[theme];

  return (
    <>
      <SafeAreaView
        style={[styles.container, {backgroundColor: currentTheme.dark}]}>
        <Text>Home</Text>
      </SafeAreaView>
      <CustomButtomSheet />
      <CustomBottomSheet2 />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
