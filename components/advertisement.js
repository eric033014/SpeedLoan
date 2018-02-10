import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Input, Label, Picker
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

export default class advertisement extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '廣告專區'
      }
    }
    static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        <Icon type='Ionicons' name="ios-radio-outline" style={{ fontSize: 20 , color: tintColor }}  />
      )
    }
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
    render() {
      const { title } = this.state;
      return (
        <Container>
        <Header style={{backgroundColor:"#3C3C3C"}} androidStatusBarColor="#282828">
          <Left>
            <Button transparent>
              <Icon name='menu' style={{color:"#7ACECE"}}  onPress={()=>
              this.props.navigation.navigate('DrawerOpen')}/>
            </Button>
          </Left>
          <Body>
          <Title>{title}</Title>
          </Body>
          <Right/>
        </Header>
   	      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: -100 }}>
            <Image
            style= {{ width: 150, height: 122.15 }}
            source = {require('../assets/img/developing.png')} />
          </View>
        </Container>
      );
    }
}
