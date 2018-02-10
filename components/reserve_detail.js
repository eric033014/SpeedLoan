import React, { Component }  from 'react';
import reserve from './reserve.js'
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
import DatePicker from 'react-native-datepicker'
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

export default class reserve_detail extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '2018/01/26 18:00'
      }
    }
    onValueChange_loan_category(value: string) {
      this.setState({
        loan_category: value
      });
    }
    onValueChange_area(value: string) {
      this.setState({
        area: value
      });
    }
    onValueChange_return_year(value: string) {
      this.setState({
        return_year: value
      });
    }
    _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));

  /* static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        <Icon type='Entypo' name="message" style={{ fontSize: 20 , color: tintColor }}  />
      )
    }*/
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
              <Icon type="Ionicons" name='md-arrow-back' style={{color:"#7ACECE"}}  onPress={()=>
              this.props.navigation.navigate('DrawerOpen')}/>
            </Button>
          </Left>
          <Body>
          <Title>{title}</Title>
          </Body>
          <Right/>
        </Header>
   	      <Content>
            <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30}}>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請貸款類別</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>貸款類別</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>需貸款金額</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>NTD 1,000,000</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>目的</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>請輸入貸款目的</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>區域</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label北部</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>事務所名</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>請輸入事務所名</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>還款年限</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>北部</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>信用卡</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>北部</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>地點</Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>北部</Label></Item>
              /*項目格式
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}><%= 項目名稱 %></Label></Item>
              <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label><%= 項目值 %></Label></Item>
              缺的自己補
              */

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
