import {View} from 'react-native';
import React from 'react';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';
import ThemeSwitchContainer from './theme/ThemeSwitch';
import UniversalComponent from '../../ui/UniversalComponent';

const SettingComponent = () => {
  const {open2} = useBottomSheetStore();

  return (
    <View>
      <UniversalComponent
        text="Вибрация"
        initialValue={false}
        onToggle={value => console.log('Switch toggled:', value)}
      />
      <UniversalComponent
        text="Музыка"
        initialValue={false}
        onToggle={value => console.log('Switch toggled:', value)}
      />
      <UniversalComponent
        label="Оформление"
        onPress={() => open2('Оформление', 650, <ThemeSwitchContainer />)}
      />
      <UniversalComponent
        label="Политика конфиденциальности"
        onPress={() => console.log('Политика конфиденциальности')}
      />
    </View>
  );
};

export default SettingComponent;
