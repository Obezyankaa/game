import React, {useMemo} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {useThemeStore} from '../store/themeStore';
import {themes} from '../constants/themeConfig';
import CustomButtomSheet from './modals/CustomButtomSheet';
import CustomBottomSheet2 from './modals/CustomBottomSheet2';

const Home = () => {
  const theme = useThemeStore(state => state.theme);
  const colors = useMemo(() => themes[theme], [theme]);

  return (
    <>
      <SafeAreaView style={[styles.container, {backgroundColor: colors.dark}]}>
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
