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


export default class regis extends Component {
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
    onCreateButtonPress(){
      console.log("create");
      const { email, password } = this.state;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onCreateLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
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
    onCreateLoginSuccess() {
      console.log("login success");
        this.setState({
            email: 'eric0330eric@gmail.com',
            password: 'ricky42613',
            loading: false,
            error: 'Success',
            login: true,
            checkcompony: this.state.iscompany,
        });
        const user=firebase.auth().currentUser.uid;
        console.log(user);
        firebase.database().ref('/profile/'+user).set({
          iscompony:this.state.iscompany,
        });

        return (<Button title="Logout" onPress={() => firebase.auth().signOut()}></Button>);
    }
    onLoginSuccess() {
      console.log("login success");
        this.setState({
            email: 'eric0330eric@gmail.com',
            password: 'ricky42613',
            loading: false,
            error: 'Success',
            login: true,
        });
        const user=firebase.auth().currentUser.uid;
        console.log(user);
        firebase.database().ref('/profile/'+user).once("value").then(function(snapshot) {
          console.log("iscompany: "+snapshot.val().iscompony);
          this.setState({
            checkcompony:snapshot.val().iscompony,
          });
        }.bind(this));
        return (<Button title="Logout" onPress={() => firebase.auth().signOut()}></Button>);
    }
    onLoginFail() {
      console.log("login failed");
      this.setState({ error: 'Failed', loading: false });
    }
    onValueChange_iscompany(value: string) {
      this.setState({
        iscompany: value
      });
    }
    static navigationOptions = {
      drawerLabel: () => null
    }
  render(){
      if(this.state.login){
        if(this.state.checkcompony == '0'){
          return;
        } else{
          return;
        }
      } else{
        return (
          <Container style={{backgroundColor:"#3C3C3C"}}>
          <Content>
          <Form style={{paddingTop: 60}}>
            <Item style={{borderColor: 'transparent', marginRight: 15, alignItems: 'center', justifyContent: 'center'}}>
            <Image
            style = {{ width: 65, height: 103, alignItems: 'center' }}
            source = {require('../assets/img/login_logo.png')} />
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
            <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>欲申請資格</Label>
            <Picker
            mode="dropdown"
            placeholder="請選擇申請資格..."
            selectedValue={this.state.iscompany}
            onValueChange={this.onValueChange_iscompany.bind(this)}
            style={{ marginLeft: 15, marginRight: 15 }}
            >
            <Item label="請選擇資格..." value='0' />
            <Item label="會員" value='0' />
            <Item label="事務所" value='1' />
          </Picker>
          <View
            style={{
              borderBottomColor: '#515151',
              borderBottomWidth: 1,
              marginLeft: 15,
              marginRight: 15
            }}
           />
          </Form>
          </Content>
          <Button block onPress={this.onCreateButtonPress.bind(this)} style={{ backgroundColor: "transparent",borderColor: "#7ACECE", borderWidth: 2 ,height: 45, marginLeft: 15, marginRight: 15, marginTop: 15, elevation: 0, marginBottom: 30 }}>
            <Text style={{color: "#7ACECE"}} >註冊</Text>
          </Button>

          </Container>
        );
      }

  }
}
