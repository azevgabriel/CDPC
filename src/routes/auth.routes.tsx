import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screen/Login';
import { Home } from '../screen/Home';
import { DetailOfKit } from '../screen/DetailOfKit'
import { FAQ } from '../screen/FAQ';
import { Scheduling } from '../screen/Scheduling';

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
      <Screen
        name="Home"
        component={Home}  
      />
      <Screen
        name="Detail"
        component={DetailOfKit}  
      />
      <Screen 
        name="FAQ"
        component={FAQ}
      />
      <Screen 
        name="Scheduling"
        component={Scheduling}
      />
    </Navigator>
  )
}