import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Register from '~/pages/Register';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import CustomerEdit from './pages/CustomerEdit';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
          CustomerEdit,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Register,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#4f4f4f',
              inactiveTintColor: 'rgba(81, 81, 81, 0.6)',
              style: {
                backgroundColor: '#f5f5f5',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
