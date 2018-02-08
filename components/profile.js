// 'use strict';

import React, { Component }  from 'react';
import firebase from 'firebase';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
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
        alignItems: 'center',
        backgroundColor: "#EFEFEF"
    },
});

//import {childRef} from '../App.js';



export default class profile extends Component {

  constructor(props) {
      super(props);
      this.state = ({
        title: '個人資訊',
        profile: [],
        name: '',
        phone: '',
        email: '',
        job: '',
        income: '',
        years: '',
        location: '',
        loading: false,
    });
    }
    /*
    componentDidMount() {
        firebase.database().ref().child('profile').on('value', (childSnapShot) => {
            const child = [];
            childSnapShot.forEach((doc) => {
                child.push({
                    key: doc.key,
                    Name: doc.toJSON().Name
                });
                this.setState({
                    profile: child,
                    loading: false
                });
            });
        });
    }
*/
    onPressAdd = () => {
        console.log(this.state.income_select);
        firebase.database().ref('profile').push({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            income: this.state.income_select,
            job: this.state.job_select,
            location: this.state.region_select,
            year: this.state.worked_select
        });
    }

    static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        <Icon name='ios-person' style={{ fontSize: 20 , color: tintColor }}  />
      )
    }
    onValueChange_job_select(value: string) {
      this.setState({
        job_select: value
      });
    }
    onValueChange_income_select(value: string) {
      this.setState({
        income_select: value
      });
    }
    onValueChange_region_select(value: string) {
      this.setState({
        region_select: value
      });
    }
    onValueChange_worked_select(value: string) {
      this.setState({
        worked_select: value
      });
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
   	      <Content>
            <Label style={{marginLeft: 15,marginBottom: 15,marginTop: 30}}>嗨，您好</Label>
            <Form style={{paddingBottom: 30}}>
              <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
                <Label>姓名</Label>
                <Input
                  placeholder="請輸入您的姓名..."
                  onBlur={ () => { this.setState({
                    name_border: '#515151'
                  })
                  }}
                  onFocus={ () => { this.setState({
                    name_border: '#7ACECE'
                  })
                  }}
                  onChangeText={
                      (text) => {
                          this.setState({
                              name: text
                          });
                      }
                  }
                  value={this.state.name}
                  style={{ borderBottomWidth: 1, borderBottomColor: this.state.name_border }} />
              </Item>
              <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
                <Label>聯絡方式</Label>
                <Input
                  placeholder="請輸入您的手機號碼或是家用電話..."
                  keyboardType = 'numeric'
                  onBlur={ () => { this.setState({
                    contact_border: '#515151'
                  })
                  }}
                  onFocus={ () => { this.setState({
                    contact_border: '#7ACECE'
                  })
                  }}
                  onChangeText={
                      (text) => {
                          this.setState({
                              phone: text
                          });
                      }
                  }
                  value={this.state.phone}
                  style={{ borderBottomWidth: 1, borderBottomColor: this.state.contact_border }} />
              </Item>
              <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
                <Label>電子信箱</Label>
                <Input
                  placeholder="請輸入您的電子信箱..."
                  onBlur={ () => { this.setState({
                    email_border: '#515151'
                  })
                  }}
                  onFocus={ () => { this.setState({
                    email_border: '#7ACECE'
                  })
                  }}
                  onChangeText={
                      (text) => {
                          this.setState({
                              email: text
                          });
                      }
                  }
                  value={this.state.email}
                  style={{ borderBottomWidth: 1, borderBottomColor: this.state.email_border }} />
              </Item>
              <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>職業</Label>
              <Picker
              mode="dropdown"
              placeholder="請選擇您的職業..."
              selectedValue={this.state.job_select}
              onValueChange={this.onValueChange_job_select.bind(this)}
              style={{ marginLeft: 15, marginRight: 15 }}
              >
              <Item label="Wallet" value="key0" />
              <Item label="ATM Card" value="key1" />
              <Item label="Debit Card" value="key2" />
              <Item label="Credit Card" value="key3" />
              <Item label="Net Banking" value="key4" />
            </Picker>
            <View
              style={{
                borderBottomColor: '#515151',
                borderBottomWidth: 1,
                marginLeft: 15,
                marginRight: 15
              }}
             />
             <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>年收入</Label>
             <Picker
             mode="dropdown"
             placeholder="請選擇您的年收入..."
             selectedValue={this.state.income_select}
             onValueChange={this.onValueChange_income_select.bind(this)}
             style={{ marginLeft: 15, marginRight: 15 }}
             >
             <Item label="Wallet" value="key0" />
             <Item label="ATM Card" value="key1" />
             <Item label="Debit Card" value="key2" />
             <Item label="Credit Card" value="key3" />
             <Item label="Net Banking" value="key4" />
           </Picker>
           <View
             style={{
               borderBottomColor: '#515151',
               borderBottomWidth: 1,
               marginLeft: 15,
               marginRight: 15
             }}
            />
            <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>所在地</Label>
            <Picker
            mode="dropdown"
            placeholder="請選擇您的所在地..."
            selectedValue={this.state.region_select}
            onValueChange={this.onValueChange_region_select.bind(this)}
            style={{ marginLeft: 15, marginRight: 15 }}
            >
            <Item label="Wallet" value="key0" />
            <Item label="ATM Card" value="key1" />
            <Item label="Debit Card" value="key2" />
            <Item label="Credit Card" value="key3" />
            <Item label="Net Banking" value="key4" />
          </Picker>
          <View
            style={{
              borderBottomColor: '#515151',
              borderBottomWidth: 1,
              marginLeft: 15,
              marginRight: 15
            }}
           />
           <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>年資</Label>
           <Picker
           mode="dropdown"
           placeholder="請選擇您的所在地..."
           selectedValue={this.state.worked_select}
           onValueChange={this.onValueChange_worked_select.bind(this)}
           style={{ marginLeft: 15, marginRight: 15 }}
           >
           <Item label="Wallet" value="key0" />
           <Item label="ATM Card" value="key1" />
           <Item label="Debit Card" value="key2" />
           <Item label="Credit Card" value="key3" />
           <Item label="Net Banking" value="key4" />
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
            <Button block style={{ backgroundColor: "#7ACECE",height: 45, marginLeft: 15, marginRight: 15, marginBottom: 30, elevation: 0 }}
           onPress={this.onPressAdd}
            >
              <Text style={{color: "white"}} >確定</Text>
            </Button>
          </Content>
        </Container>

      );
    }
}
