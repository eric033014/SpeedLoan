// 'use strict';

import React, { Component }  from 'react';
import reserve from './reserve.js'
import profile from './profile.js'
import rate from './rate.js'
import repayment from './repayment.js'
import login from './login.js'
import addreserve from './addreserve.js'
import reserve_detail from './reserve_detail.js'

import {
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content
} from 'native-base';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
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
    },
    drawerbanner: {
      height: 50,
      width: 208
    }
});

const customnav = (props) =>(
  <Container style={{ backgroundColor:"#F2F2F2" }}>
    <Header style={{ height: 80,backgroundColor:"#F2F2F2",elevation: 0 ,shadowOffset: {height: 0, width: 0} ,shadowOpacity: "transparent" ,shadowOpacity: 0,noShadow: true }} noShadow="true" androidStatusBarColor="#282828">
      <Body style={{ shadowOpacity: "transparent" ,shadowOpacity: 0 }}>
        <Image
        style = {styles.drawerbanner}
        source = {require('../assets/img/logo_banner.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} activeTintColor='#7ACECE' activeBackgroundColor='#3C3C3C' inactiveTintColor='#3C3C3C' inactiveBackgroundColor='transparent' />
    </Content>
  </Container>
)

const nav = DrawerNavigator(
  {
    貸款諮詢:{ screen:reserve},
    還款資訊:{screen:repayment},
    利率試算:{screen:rate},
    個人資訊:{ screen:profile},

  },
  {
    initialRouteName:'個人資訊',
    drawerPosition:'left',
    contentComponent: customnav,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

  }
);
module.exports = nav;
