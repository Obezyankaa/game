import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import HistoryScreen from '../screen/HistoryScreen';
import MagazineScree from '../screen/MagazineScree';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function RootStack() {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomeScreen}
          />
          <Tab.Screen name="Game" component={HistoryScreen} />
          <Tab.Screen name="Magazine" component={MagazineScree} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
