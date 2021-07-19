import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screen/Login';

const  { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="Login"
        component={Login}  
      />
    </Navigator>
  )
}