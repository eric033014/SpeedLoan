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
  Container, Header, Left, Body, Right, Button, Icon, Title
} from 'native-base';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
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

export default class header extends Component {
   constructor(props) {
       super(props);
       //console.log(JSON.stringify(this));
     }
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu'  />
            </Button>
          </Left>
            <Body>
              <Title>Header</Title>
            </Body>
        </Header>
    );
  }
}

module.exports = header;
