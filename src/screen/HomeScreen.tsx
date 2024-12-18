/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconWrapper from '../ui/setting/IconWrapper';
import Home from '../components/Home';
import { useBottomSheetStore } from '../store/useBottomSheetStore';
import { Text } from 'react-native';
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
                    'Помощь',
                    <React.Fragment>
                      <Text>Это окно помощи!</Text>
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
                    <React.Fragment>
                      <Text>Это окно настроек!</Text>
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
