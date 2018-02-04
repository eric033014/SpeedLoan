import React, { Component }  from 'react';
import firebase from 'firebase';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

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

export default class login extends Component {
    constructor(props) {
      super(props);
      this.state = {email:"",password:"",error:"",login:false};
    }
    static navigationOptions = {
      tabBarLabel:'登入',
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey:'AIzaSyAyh82MrE-GGQKw75TUIDr84EnDUR64jVM',
            authDomain:"speedloan-rrrr1234.firebaseapp.com",
            databaseURL:"https://speedloan-rrrr1234.firebaseio.com/",
            storageBucket:"speedloan-rrrr1234.appspot.com",
        });
    }


    onButtonPress() {
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
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: 'Success',
            login: true,
        });
        return <Button title="Logout" onPress={() => firebase.auth().signOut()}></Button>;
    }
    onLoginFail() {
      this.setState({ error: 'Failed', loading: false });
    }

  static navigationOptions = {
    tabBarLabel:'登入',
  }
    render() {
      return (
        <View style={styles.container}>
               <TextInput
                 style={{width: 150,height: 40, borderColor: 'gray', borderWidth: 1}}
                 autoCorrect={false}
                 label="Email"
                 placeholder="Username"
                 value={this.state.email}
                 onChangeText={email => this.setState({ email })}
               />
               <TextInput
                 style={{width:150,height: 40, borderColor: 'gray', borderWidth: 1}}
                 autoCorrect={false}
                 placeholder="Password"
                 value={this.state.password}
                 onChangeText={password => this.setState({ password })}
               />
               <Button
                 onPress={this.onButtonPress.bind(this)}
                 title="Login"
               />
               <Text style={styles.errorTextStyle}>
                 {this.state.error}
               </Text>
        </View>
      );
    }
}
