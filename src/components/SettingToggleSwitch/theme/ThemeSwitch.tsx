import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import SwitchWrapper from '../../../ui/SwitchWraper';
import CheckBoxTheme from './CheckBoxTheme';

const ThemeSwitchContainer = () => {
  return (
    <SafeAreaView>
      <SwitchWrapper text="Автоматическое" />
      <CheckBoxTheme />
    </SafeAreaView>
  );
};

export default ThemeSwitchContainer;
