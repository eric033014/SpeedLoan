// 'use strict';

import React, { Component }  from 'react';
import reserve from './reserve.js'
import profile from './profile.js'
import rate from './rate.js'
import repayment from './repayment.js'
import login from './login.js'
import {
  DrawerNavigator,
} from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
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
module.exports = nav; 
