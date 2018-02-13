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
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';



import firebase from 'firebase';
var Nav = require('./components/nav.js');
var CompanyNav = require('./components/companynav.js')
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
        password_border: '#FFFFFF',
        showregis: false,
        iscompony: '1',
        processing: false
      };

    }
    onCreateButtonPress(){
      this.setState({
        processing: true
      });
      console.log("create");
      var { email, password } = this.state;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onCreateLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    }
    onButtonPress() {
        this.setState({
          processing: true
        });
        var { email, password } = this.state;
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
    onCreateLoginSuccess() {
      console.log("login success");
        this.setState({
            loading: false,
            error: 'Success',
            login: true,
            checkcompony: this.state.iscompany,
            processing: false
        });
        var user=firebase.auth().currentUser.uid;
        console.log(user);
        firebase.database().ref('/profile/'+user).set({
          iscompony:this.state.iscompany,
        }).then();

        return (<Button title="Logout" onPress={() => firebase.auth().signOut()}></Button>);
    }
    onLoginSuccess() {
      console.log("login success");
        this.setState({
            loading: false,
            error: 'Success',
            login: true,
            processing: false
        });
        var user=firebase.auth().currentUser.uid;
        console.log(user);
        firebase.database().ref('/profile/'+user).once("value").then(function(snapshot) {
          console.log("iscompany: "+snapshot.val().iscompony);
          this.setState({
            checkcompony:snapshot.val().iscompony,
          });
        }.bind(this));
        return (<Button title="Logout" onPress={() => firebase.auth().signOut()}></Button>);
    }
    onLoginFail(err) {
      console.log(err);
      var msg = "登入失敗!";
      switch(err.code){
        case 'auth/invalid-email':
          msg = "帳號格式錯誤!請使用email登入(格式:xxx@yyy.zzz)";
          break;
        case 'auth/user-disabled':
          msg = "帳號遭到禁用!請聯絡所屬事務所或通知我們!";
          break;
        case 'auth/user-not-found': case 'auth/wrong-password':
          msg = "密碼錯誤或帳號不存在!請重新確認密碼或註冊以取得會員!";
          break;
        default:
          msg = "登入失敗!"
      }
      this.setState({ error: msg, loading: false, processing: false });
      Toast.show(msg);
    }
    onValueChange_iscompany(value: string) {
      this.setState({
        iscompany: value
      });
    }
    onRegisPress() {
      this.setState({
        showregis: true
      });
    }
    backToLogin() {
      this.setState({
        showregis: false
      });
    }
  render(){
      if(this.state.processing){
          return(
            <View style={{ flex: 1 }}>
                <Spinner visible={this.state.processing} textContent={""} overlayColor={"rgba(0, 0, 0, 0.5)"} textStyle={{color: '#FFF'}} />
            </View>
          );
      }else if(this.state.login){
        if(this.state.checkcompony == '0'){
          return <Nav screenProps={firebase}/>;
        } else{
          return <CompanyNav screenProps={firebase}/>;
        }
      } else{
        return (
          <Container style={{backgroundColor:"#3C3C3C"}}>
          <Content>
          <Form style={{paddingTop: 60}}>
            {
              (!this.state.showregis) &&
              <Item style={{borderColor: 'transparent', marginRight: 15, alignItems: 'center', justifyContent: 'center'}}>
              <Image
              style = {{ width: 65, height: 103, alignItems: 'center' }}
              source = {require('./assets/img/login_logo.png')} />
              </Item>
            }
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 30, marginBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
            { (!this.state.showregis) &&
              <Label style={{ color: 'white', fontSize: 20}}>
                登入
              </Label>
            }
            { (this.state.showregis) &&
              <Label style={{ color: 'white', fontSize: 20}}>
                試用帳號註冊
              </Label>
            }
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
            { this.state.showregis &&
              <Label style={{ color: 'white',marginLeft: 15, marginTop: 10, fontSize: 15 }}>欲申請資格</Label>
            }
            { this.state.showregis &&
              <Picker
              mode="dropdown"
              placeholder="請選擇註冊資格..."
              selectedValue={this.state.iscompany}
              onValueChange={this.onValueChange_iscompany.bind(this)}
              itemTextStyle={{ color: '#FFFFFF' }}
              style={{ marginLeft: 15, marginRight: 15, color: '#FFFFFF' }}
              >
              <Item label="請選擇註冊資格..." value='0' />
              <Item label="會員" value='0' />
              <Item label="事務所" value='1' />
            </Picker>
            }
            { this.state.showregis &&
              <View
                style={{
                  borderBottomColor: '#FFFFFF',
                  borderBottomWidth: 1,
                  marginLeft: 15,
                  marginRight: 15
                }}
               />
            }
          </Form>
          </Content>
          { (!this.state.showregis) &&
            <Button block onPress={this.onButtonPress.bind(this)} style={{ backgroundColor: "#7ACECE",height: 45, marginLeft: 15, marginRight: 15, elevation: 0 }}>
              <Text style={{color: "#3C3C3C"}} >登入</Text>
            </Button>
          }
          { (!this.state.showregis) &&
            <Button block onPress={this.onRegisPress.bind(this)} style={{ backgroundColor: "transparent",borderColor: "#7ACECE", borderWidth: 2 ,height: 45, marginLeft: 15, marginRight: 15, marginTop: 15, elevation: 0, marginBottom: 30 }}>
              <Text style={{color: "#7ACECE"}} >註冊</Text>
            </Button>
          }
          { this.state.showregis &&
            <Button block onPress={this.onCreateButtonPress.bind(this)} style={{ backgroundColor: "#7ACECE",height: 45, marginLeft: 15, marginRight: 15, elevation: 0 }}>
              <Text style={{color: "#3C3C3C"}} >註冊</Text>
            </Button>
          }
          { (this.state.showregis) &&
            <Button block onPress={this.backToLogin.bind(this)} style={{ backgroundColor: "transparent",borderColor: "#7ACECE", borderWidth: 2 ,height: 45, marginLeft: 15, marginRight: 15, marginTop: 15, elevation: 0, marginBottom: 30 }}>
              <Text style={{color: "#7ACECE"}} >返回登入</Text>
            </Button>
          }
          </Container>
        );
      }

  }
}
