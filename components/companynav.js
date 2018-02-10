// 'use strict';

import React, { Component }  from 'react';
import reserve from './company_reserve.js'
import profile from './company_profile.js'
import rate from './rate.js'
import repayment from './repayment.js'
import login from './login.js'
import addreserve from './addreserve.js'
import reserve_detail from './reserve_detail.js'
import advertisement from './advertisement.js'
import chatroom from './chatroom.js'

import {
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Label
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
    <Label style={{ color: '#7ACECE', marginBottom: 20, marginLeft: 20, fontWeight: '800' }}>代書端</Label>
  </Container>
)

const nav = DrawerNavigator(
  {
    TEMP:{ screen:addreserve},
    貸款諮詢區:{ screen:reserve},
    事務所資訊:{ screen:profile},
    廣告專區:{ screen:advertisement},
    聊天室:{ screen:chatroom},

  },
  {
    initialRouteName:'事務所資訊',
    drawerPosition:'left',
    contentComponent: customnav,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

  }
);
module.exports = nav;
