import React, { Component } from 'react';
import { View, Text } from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ViewHomeScreen from '../screens/ViewHomeScreen';
import { styles, primaryColor, secondaryColor, black, fineWhite } from '../assets/style/Style'
import {Icon} from 'react-native-elements';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import FIcon from 'react-native-vector-icons/Foundation';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
AntIcon.loadFont();
SIcon.loadFont();
FIcon.loadFont();
IonIcon.loadFont();
IconEntypo.loadFont();


class DashboardScreen extends Component{
  render() {
    return <BottomTab />
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    'Home': {
      screen: HomeScreen,
      navigationOptions: {
        // tabBarLabel: ({routes, index, focused}) => <HomeScreen />,
        tabBarIcon: ({tintColor, focused}) =>
          focused ? (
            <IconEntypo
              name={'home'}
              size={24}
              color={focused ? secondaryColor : black}
              style={{padding: 0}}
            />
          ) : (
            <SIcon name={'home'} size={22} color={black} />
          ),
      },
    },

    'Saved': {
      screen: SavedScreen,
      navigationOptions: {
        // tabBarLabel: ({routes, index, focused}) => <HomeScreen />,
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            type="ionicon"
            name={focused ? 'heart' : 'heart-outline'}
            size={24}
            color={focused ? secondaryColor : black}
          />
        ),
      },
    },

    'Categories': {
      screen: CategoriesScreen,
      navigationOptions: {
        // tabBarLabel: ({routes, index, focused}) => <HomeScreen />,
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            type="ionicon"
            name={focused ? 'grid' : 'grid-outline'}
            size={24}
            color={focused ? secondaryColor : black}
          />
        ),
      },
    },

    'Settings': {
      screen: SettingsScreen,
      navigationOptions: {
        // tabBarLabel: ({routes, index, focused}) => <HomeScreen />,
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            type="ionicon"
            name={focused ? 'settings' : 'settings-outline'}
            size={24}
            color={focused ? secondaryColor : black}
          />
        ),
      },
    },

  },
  {
    initialRouteName: 'Home',
    animationEnabled: false,
    activeColor: secondaryColor,
    inactiveColor: black,
    tintColor: 'red',
    shifting: false,
    tabBarColor: black,
    barStyle: {
    backgroundColor: fineWhite,
    borderTopColor: fineWhite,
    height: 54,
    paddingTop: 3,
    marginBottom: 3,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },

    ViewHome: {
      screen: ViewHomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

  },
  {
    initialRouteName: 'Home',
  },
);

const BottomTab = createAppContainer(AuthStack);
export default DashboardScreen;
