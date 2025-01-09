import {View} from 'react-native';
import React from 'react';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import SwitchWrapper from '../../ui/SwitchWraper';
import ThemeSwitchContainer from './theme/ThemeSwitch';
import ButtonTransition from '../../ui/ButtonTransition/ButtonTransition';

const SettingComponent = () => {
  const {open2} = useBottomSheetStore();

  return (
    <View>
      <SwitchWrapper text="Вибрация" />
      <SwitchWrapper text="Музыка" />
      <ButtonTransition
        label="Оформление"
        onPress={() => open2('Оформление', 650, <ThemeSwitchContainer />)}
      />
      <ButtonTransition
        label="Политика конфиденциальности"
      />
    </View>
  );
};

export default SettingComponent;
