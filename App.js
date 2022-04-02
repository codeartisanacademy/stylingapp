import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons'; 

import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import MyList from './src/components/screens/MyList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={
            {
              tabBarIcon:()=>(<Feather name="home" size={24} color="black" />)
            }
          }
        />
        <Tab.Screen 
        name="Search" 
        component={Search} 
          options={{
            tabBarIcon:()=>(<Feather name="search" size={24} color="black" />)
          }}
        />
        <Tab.Screen 
          name="My List" 
          component={MyList} 
          options={
            {
              tabBarIcon:()=>(<Feather name="heart" size={24} color="black" />)
            }
          }  
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
