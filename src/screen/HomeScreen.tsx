/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconWrapper from '../ui/setting/IconWrapper';
import Home from '../components/Home';
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
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
            headerLeft: () => <IconWrapper iconType="question" />,
            headerRight: () => <IconWrapper iconType="settings" />,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeScreen;
