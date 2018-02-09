/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component }  from 'react';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title
} from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


import firebase from 'firebase';
var Nav = require('./components/nav.js');
var Main_header = require('./components/header.js');


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// const nav = DrawerNavigator(
//   {
//   登入:{screen:login},
//   個人資訊:{ screen:profile},
//   貸款諮詢:{ screen:reserve},
//   還款資訊:{screen:repayment},
//   利率試算:{screen:rate},
//   },
//   {
//     initialRouteName:'個人資訊',
//     drawerPosition:'left'
//   }
// );


const firebaseApp = firebase.initializeApp({
    apiKey:'AIzaSyAyh82MrE-GGQKw75TUIDr84EnDUR64jVM',
    authDomain:"speedloan-rrrr1234.firebaseapp.com",
    databaseURL:"https://speedloan-rrrr1234.firebaseio.com/",
    storageBucket:"speedloan-rrrr1234.appspot.com",
});
const rootRef = firebaseApp.database().ref();
const itemsRef = rootRef.child('profile');
export default class App extends Component {
  // componentWillMount() {
  //
  //   itemsRef.push({
  //       name: 'this.state.name',
  //       email: 'this.state.email',
  //       phone: 'this.state.phone',
  //       income: 'this.state.income',
  //       job: 'this.state.jo',
  //       location: 'this.state.location',
  //       year: 'this.state.years'
  //   });
  //   console.log("push");
  //
  // }

  render(){

    return(
        <Nav screenProps={firebase}/>
    );
  }
}

//export {childRef};
