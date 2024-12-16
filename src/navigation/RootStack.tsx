import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import MagazineScree from '../screen/MagazineScree';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TolkovanieScreen from '../screen/TolkovanieScreen';

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
              title: 'Главная',
              // tabBarStyle: {display: 'none'},
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Game"
            options={{title: 'Толкование'}}
            component={TolkovanieScreen}
          />
          <Tab.Screen
            name="Magazine"
            options={{title: 'Журнал'}}
            component={MagazineScree}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
