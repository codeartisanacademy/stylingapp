import { View, Text } from 'react-native';
import React from 'react';
import Home from '../components/screens/Home';
import Detail from '../components/screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

export default StackNavigation