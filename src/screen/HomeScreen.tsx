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
  const {open} = useBottomSheetStore();
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
                  open(
                    'Правила',
                    500,
                    <React.Fragment>
                      <Text>Это окно правил!</Text>
                    </React.Fragment>,
                  )
                }
              />
            ),
            headerRight: () => (
              <IconWrapper
                iconType="settings"
                onPress={() =>
                  open(
                    'Настройки',
                    400,
                    <React.Fragment>
                      <SettingComponent/>
                    </React.Fragment>,
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
