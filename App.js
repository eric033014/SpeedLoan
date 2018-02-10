/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component }  from 'react';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Input, Label, Picker
} from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';


import firebase from 'firebase';
var Nav = require('./components/nav.js');
var Main_header = require('./components/header.js');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  },
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const firebaseApp = firebase.initializeApp({
    apiKey:'AIzaSyAyh82MrE-GGQKw75TUIDr84EnDUR64jVM',
    authDomain:"speedloan-rrrr1234.firebaseapp.com",
    databaseURL:"https://speedloan-rrrr1234.firebaseio.com/",
    storageBucket:"speedloan-rrrr1234.appspot.com",
});
const rootRef = firebaseApp.database().ref();
const itemsRef = rootRef.child('profile');

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email:"",
        password:"",
        error:"",
        uid:"",
        login:false,
        user_border: '#FFFFFF',
        password_border: '#FFFFFF'
      };

    }
    onButtonPress() {
        //this.setState({login: true,});
        const { email, password } = this.state;
        console.log(email+" "+password);
          firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
            ///////  底下為註冊方式  /////
            // .catch(() => {
            //   firebase.auth().createUserWithEmailAndPassword(email, password)
            //   .then(this.onLoginSuccess.bind(this))
            //   .catch(this.onLoginFail.bind(this));
            // });
        console.log(this.props);
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: 'Success',
            login: true,
        });
        const user=firebase.auth().currentUser.uid;
        //this.setState({ uid: user.uid });
        // firebase.database().ref('profile/'+user.uid).set({
        //   iscompony:0,
        // });
        return (<Button title="Logout" onPress={() => firebase.auth().signOut()}></Button>);
    }
    onLoginFail() {
      this.setState({ error: 'Failed', loading: false });
    }

  render(){
      if(this.state.login){
        return <Nav screenProps={firebase}/>;
      } else{
        return (
          <Container style={{backgroundColor:"#3C3C3C"}}>
          <Content>
          <Form>
            <Item style={{borderColor: 'transparent', marginRight: 15, alignItems: 'center', justifyContent: 'center'}}>
            <Image
            style = {{ width: 65, height: 103, alignItems: 'center' }}
            source = {require('./assets/img/login_logo.png')} />
            </Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 30, marginBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Label style={{ color: 'white', fontSize: 20}}>
              登入
            </Label>
            </Item>
            <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
            <Label style={{ color: '#FFFFFF' }} >使用者名稱</Label>
            <Input
              placeholder="請輸入您的使用者名稱..."
              onBlur={ () => { this.setState({
                user_border: '#FFFFFF'
              })
              }}
              onFocus={ () => { this.setState({
                user_border: '#7ACECE'
              })
              }}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={{ borderBottomWidth: 1, borderBottomColor: this.state.user_border, color: '#FFFFFF' }} />
            </Item>
            <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
            <Label style={{ color: '#FFFFFF' }} >密碼</Label>
            <Input
              placeholder="請輸入您的密碼..."
              onBlur={ () => { this.setState({
                password_border: '#FFFFFF'
              })
              }}
              onFocus={ () => { this.setState({
                password_border: '#7ACECE'
              })
              }}
              secureTextEntry = {true}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={{ borderBottomWidth: 1, borderBottomColor: this.state.password_border, color: '#FFFFFF' }} />
            </Item>
            <Item style={{borderColor: 'transparent', marginRight: 15}}>
            <Label style={styles.errorTextStyle}>
              {this.state.error}
            </Label>
            </Item>
          </Form>
          <Button block onPress={this.onButtonPress.bind(this)} style={{ backgroundColor: "#7ACECE",height: 45, marginLeft: 15, marginRight: 15, marginTop: 30, elevation: 0 }}>
            <Text style={{color: "#3C3C3C"}} >登入</Text>
          </Button>
          <Button block onPress={this.onButtonPress.bind(this)} style={{ backgroundColor: "transparent",borderColor: "#7ACECE", borderWidth: 2 ,height: 45, marginLeft: 15, marginRight: 15, marginTop: 15, elevation: 0 }}>
            <Text style={{color: "#7ACECE"}} >註冊</Text>
          </Button>
          </Content>
          </Container>
        );
      }

  }
}
