import {View, Text, Button} from 'react-native';
import React from 'react';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';

const SettingComponent = () => {
  const {open} = useBottomSheetStore();

  return (
    <View>
      <Text>SettingComponent</Text>
      <Button
        title="переход на другую модалку"
        onPress={() => open(
          'Оформление',
          650,
          <View>
            <Text>Другая модалка</Text>
          </View>,
        )}/>
    </View>
  );
};

export default SettingComponent;
