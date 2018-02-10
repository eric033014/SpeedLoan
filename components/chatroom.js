import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Label
} from 'native-base';
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

export default class chatroom extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '聊天室'
      }
    }
    static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        <Icon type='Entypo' name="message" style={{ fontSize: 20 , color: tintColor }}  />
      )
    }
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
    render() {
      const { title } = this.state;
      return (
        <View>
          <Text>Chat room page</Text>
        </View>
      );
    }
}
