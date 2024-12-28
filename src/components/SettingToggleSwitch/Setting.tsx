import {View, Text, Button} from 'react-native';
import React from 'react';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import SwitchWrapper from '../../ui/SwitchWraper';
import ThemeSwitchContainer from './theme/ThemeSwitch';

const SettingComponent = () => {
  const {open2} = useBottomSheetStore();

  return (
    <View>
      <SwitchWrapper text="Вибрация" />
      <SwitchWrapper text="Музыка" />
      <Button
        title="Оформление"
        onPress={() =>
          open2('Оформление', 650, <ThemeSwitchContainer />)
        }
      />
    </View>
  );
};

export default SettingComponent;
