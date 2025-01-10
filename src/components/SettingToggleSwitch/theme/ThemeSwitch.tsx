import {SafeAreaView} from 'react-native';
import React from 'react';
import CheckBoxTheme from './CheckBoxTheme';
import UniversalComponent from '../../../ui/UniversalComponent';

const ThemeSwitchContainer = () => {
  return (
    <SafeAreaView>
      <UniversalComponent
        text="Автоматическое"
        initialValue={false}
        onToggle={value => console.log('Switch toggled:', value)}
      />
      <CheckBoxTheme />
    </SafeAreaView>
  );
};

export default ThemeSwitchContainer;
