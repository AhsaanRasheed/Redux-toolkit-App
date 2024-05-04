
import React from 'react';
import {
  Text,
  View, Image,
  Button,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import productWrapper from './components/productWrapper';
import UserList from './components/userList';


const stack = createNativeStackNavigator()

function App(){

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={productWrapper} />
        <stack.Screen name='User' component={UserList} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
