import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeScreenNavigationContainer } from 'react-native-screens/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../ecrans/Home';
import BottomTabs from '../ecrans/tabs';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;