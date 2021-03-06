import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ExchangeScreen from '../screens/ExchangeScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require('../assets/Home.png')} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  },
 ExchangeScreen: {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require('../assets/Exchange.png')} style={{width:20, height:20}}/>,
      tabBarLabel : "Exchange ",
    }
  }
});
