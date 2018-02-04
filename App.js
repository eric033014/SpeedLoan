/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import {
  DrawerNavigator,
} from 'react-navigation';


import firebase from 'firebase';
import reserve from './components/reserve.js'
import profile from './components/profile.js'
import rate from './components/rate.js'
import repayment from './components/repayment.js'
import login from './components/login.js'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const nav = DrawerNavigator(
  {
  登入:{screen:login},
  個人資訊:{ screen:profile},
  貸款諮詢:{ screen:reserve},
  還款資訊:{screen:repayment},
  利率試算:{screen:rate},
  },
  {
    initialRouteName:'個人資訊',
    drawerPosition:'left'
  }
);
export default nav;
