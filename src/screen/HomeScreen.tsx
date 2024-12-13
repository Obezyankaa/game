import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameScreen from './HistoryScreen';
import TestScreen from './TestScreen';
import IconWrapper from '../ui/setting/IconWrapper';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          headerLeft: () => <IconWrapper iconType='question' />,
          headerRight: () => <IconWrapper iconType="settings" />,
        }}
      />
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
