import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LandingScreen from '../screens/LandingScreen';
import DashboardScreen from '../routes/DashboardScreen';

class StackNav extends Component{
  render() {
    return <AppContainer />
  }
}

const AppStackNavigator = createStackNavigator({
  Landing: {
    screen: LandingScreen,
    navigationOptions: {
      gesturesEnabled: false,
      headerShown: false,
    },
  },

  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      gesturesEnabled: false,
      headerShown: false,
    },
  }
},
{
  initialRouteName: 'Landing',
})

const AppContainer = createAppContainer(AppStackNavigator);
export default StackNav;
