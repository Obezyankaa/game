/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconWrapper from '../ui/IconWrapper';
import Home from '../components/Home';
import {useBottomSheetStore} from '../store/useBottomSheetStore';
import {Text} from 'react-native';
import SettingComponent from '../components/SettingToggleSwitch/Setting';
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const { open1 } = useBottomSheetStore();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            title: '',
            headerTransparent: true, // Делает заголовок прозрачным
            headerStyle: {backgroundColor: 'transparent'},
            headerLeft: () => (
              <IconWrapper
                iconType="question"
                onPress={() =>
                  open1(
                    'Правила',
                    500,
                      <Text>Это окно правил!</Text>
                  )
                }
              />
            ),
            headerRight: () => (
              <IconWrapper
                iconType="settings"
                onPress={() =>
                  open1(
                    'Настройки',
                    400,
                      <SettingComponent />
                  )
                }
              />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeScreen;
