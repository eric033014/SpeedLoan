import React, { Component }  from 'react';
import reserve from './reserve.js';
import Toast from 'react-native-simple-toast';
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
import DatePicker from 'react-native-datepicker';
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
        title: '貸款諮詢細節'
      }
    }
  // componentWillMount(){
  //
  // }
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
    onReslovePress(){
      this.props.screenProps.database().ref('/reserve/'+this.props.navigation.state.params.key).update({
        finish:1,
      });
      Toast.show('已將狀態調整為解決', Toast.SHORT);
      this.props.navigation.navigate('reserve');
    }
    //_onChange = (formData) => console.log(JSON.stringify(formData, null, " "));

  /* static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        <Icon type='Entypo' name="message" style={{ fontSize: 20 , color: tintColor }}  />
      )
    }*/
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  static navigationOptions = {
title: '貸款諮詢細節',
headerTintColor: '#7ACECE',
headerStyle: {
backgroundColor: '#3C3C3C',
},
headerTitleStyle: {
  color: 'white',
  fontWeight: "normal"
}
};
  /*
  old header

  <Header style={{backgroundColor:"#3C3C3C"}} androidStatusBarColor="#282828">
    <Left>
      <Button transparent>
        <Icon type="Ionicons" name='md-arrow-back' style={{color:"#7ACECE"}}  onPress={()=>
        this.props.navigation.navigate(this.props.navigation.state.params.back)}/>
      </Button>
    </Left>
    <Body>
    <Title>{title}</Title>
    </Body>
    <Right/>
  </Header>

  */
 render() {
   const { title } = this.state;
   //console.log("xxx "+this.props.navigation.state.params.test);
   return (
     <Container style={{backgroundColor:'#EFEFEF'}}>
       <Content>
       { (this.props.navigation.state.params.finish == 0) &&
         <Button block onPress={this.onReslovePress.bind(this)} style={{ marginTop: 30, backgroundColor: "#7ACECE",height: 45, marginLeft: 15, marginRight: 15, elevation: 0 }}>
           <Text style={{color: "white"}} >標示為已解決</Text>
         </Button>
       }
       <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30, backgroundColor: 'white', marginLeft: 15, paddingTop: 20, paddingBottom: 20}}>
         <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>諮詢人姓名</Label></Item>
         <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.name}</Label></Item>
         <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10, marginBottom: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1, }}></Item>
         <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>諮詢人電話</Label></Item>
         <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.phone}</Label></Item>
         <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10, marginBottom: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1, }}></Item>
         <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>諮詢人工作</Label></Item>
         <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.job}</Label></Item>
       </Form>


       <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30, backgroundColor: 'white', marginLeft: 15, paddingTop: 20, paddingBottom: 20}}>
       <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請貸款類別</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.category}</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10, marginBottom: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1, }}></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>需貸款金額</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.money}</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10, marginBottom: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1, }}></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>目的</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.purpose}</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10, marginBottom: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1, }}></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>還款年限</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.year}</Label></Item>
       </Form>

       <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30, backgroundColor: 'white', marginLeft: 15, paddingTop: 20, paddingBottom: 20, marginBottom: 30}}>
       <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>預約區域/時間 1</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.city1}, {this.props.navigation.state.params.area1}  {this.props.navigation.state.params.date1}</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10, marginBottom: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1, }}></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>預約區域/時間 2</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.city2},{this.props.navigation.state.params.area2}  {this.props.navigation.state.params.date2}</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10, marginBottom: 10, borderBottomColor: '#EFEFEF', borderBottomWidth: 1, }}></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>預約區域/時間 3</Label></Item>
       <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>{this.props.navigation.state.params.city3},{this.props.navigation.state.params.area3}  {this.props.navigation.state.params.date3}</Label></Item>
     </Form>

       </Content>
     </Container>

   );
    }
}
