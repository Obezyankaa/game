import {View, Text, Button} from 'react-native';
import React from 'react';
import {useBottomSheetStore} from '../../store/useBottomSheetStore';

const SettingComponent = () => {
  const {open2} = useBottomSheetStore();

  return (
    <View>
      <Text>Здесь контент первой модалки</Text>
      <Button
        title="Открыть вторую"
        onPress={() =>
          open2('Вторая модалка', 650, <Text>Содержимое второй модалки</Text>)
        }
      />
    </View>
  );
};

export default SettingComponent;
