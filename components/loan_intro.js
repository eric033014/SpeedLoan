import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Input, Label, Picker, Tab, Tabs, ScrollableTab
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
        title: '貸款說明'
      }
    }
    static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        <Icon type="FontAwesome" name='question-circle' style={{ fontSize: 20 , color: tintColor }}  />
      )
    }

 render() {
   const { title } = this.state;
   return (
     <Container>
     <Header style={{backgroundColor:"#3C3C3C"}} androidStatusBarColor="#282828" hasTabs>
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
     <Tabs renderTabBar={()=> <ScrollableTab />} tabStyle={{backgroundColor:"#3C3C3C"}}>
        <Tab heading="小額信貸" tabStyle={{backgroundColor:"#3C3C3C"}} activeTabStyle={{backgroundColor:"#3C3C3C"}} textStyle={{ color: "gray" }} >
          <Content>
          <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30}}>
            <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請條件</Label></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>上班族有勞保及薪轉即可~{"\n"}
            工作滿三個月 具勞保 薪資轉帳紀錄優質:軍公教、百大企業、上市公司員工</Label></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>可貸額度</Label></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>5萬~10萬</Label></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>還款期限</Label></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>一年以內</Label></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請人須具備基本條件</Label></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>年滿二十歲之本國國民皆可提出申請。(18歲已婚者可)
            ~{"\n"}檢附文件
            ~{"\n"}身份證正反面影本
            ~{"\n"}行照影本
            ~{"\n"}第二證件影本
            ~{"\n"}財力證明以實際需求為主
            </Label></Item>
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          </Form>
          </Content>
        </Tab>
        <Tab heading="土地貸款" tabStyle={{backgroundColor:"#3C3C3C"}} activeTabStyle={{backgroundColor:"#3C3C3C"}} textStyle={{ color: "gray" }} >
        <Content>
        <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30}}>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請條件</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>須具備權狀，持分地亦可，由專業地政人士辦理
          ~{"\n"}轉貸銀行持分地、林地、旱地、工業用地皆可申辦~{"\n"}可解除假扣押，由專業代書負責解除不良債權 重新向銀行申貸</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>可貸額度</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>100萬~500萬</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>還款期限</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>視銀行狀況</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請人須具備基本條件</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>年滿二十歲之本國國民皆可提出申請。(18歲已婚者可)
          ~{"\n"}檢附文件
          ~{"\n"}身份證正反面影本
          ~{"\n"}行照影本
          ~{"\n"}第二證件影本
          ~{"\n"}財力證明以實際需求為主
          </Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
        </Form>
        </Content>
        </Tab>
        <Tab heading="房屋二胎貸款" tabStyle={{backgroundColor:"#3C3C3C"}} activeTabStyle={{backgroundColor:"#3C3C3C"}} textStyle={{ color: "gray" }} >
        <Content>
        <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30}}>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請條件</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>須自有房屋 具備房屋權狀
          ~{"\n"}協助向銀行申請二胎貸款</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>可貸額度</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>100萬~500萬</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>還款期限</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>視銀行狀況</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請人須具備基本條件</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>年滿二十歲之本國國民皆可提出申請。(18歲已婚者可)
          ~{"\n"}檢附文件
          ~{"\n"}身份證正反面影本
          ~{"\n"}行照影本
          ~{"\n"}第二證件影本
          ~{"\n"}財力證明以實際需求為主
          </Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
        </Form>
        </Content>
        </Tab>
        <Tab heading="汽車貸款" tabStyle={{backgroundColor:"#3C3C3C"}} activeTabStyle={{backgroundColor:"#3C3C3C"}} textStyle={{ color: "gray" }} >
        <Content>
        <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30}}>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請條件</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>不限車種：國產車、分期車、進口車、公司車、計程車、三噸半以下貨車皆可承作。
          ~{"\n"}條件限制：申貸車輛車齡圴不得超過十六年，貨車十八年，貸款年限五年。</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>可貸額度</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>10萬~300萬</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>還款期限</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>視銀行狀況</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請人須具備基本條件</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>年滿二十歲之本國國民皆可提出申請。(18歲已婚者可)
          ~{"\n"}檢附文件
          ~{"\n"}身份證正反面影本
          ~{"\n"}行照影本
          ~{"\n"}第二證件影本
          ~{"\n"}財力證明以實際需求為主
          </Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
        </Form>
        </Content>
        </Tab>
        <Tab heading="工商融資" tabStyle={{backgroundColor:"#3C3C3C"}} activeTabStyle={{backgroundColor:"#3C3C3C"}} textStyle={{ color: "gray" }} >
        <Content>
        <Form style={{borderColor: 'transparent', marginRight: 15, marginTop: 30}}>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請條件</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>年滿30歲之公司負責人，開業滿一年以上，資本額五十萬元以上之公司負 責人皆可辦理工商融資。
          ~{"\n"}1. 身分證正本及第二證件正本（駕照或健保卡)~{"\n"}2. 營利事業登記證影本~{"\n"}3. 公司戶支票</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>可貸額度</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>500萬~1000萬</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>還款期限</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>視銀行狀況</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15}}><Label style={{ color:'gray' }}>申請人須具備基本條件</Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 0}}><Label>年滿二十歲之本國國民皆可提出申請。(18歲已婚者可)
          ~{"\n"}檢附文件
          ~{"\n"}身份證正反面影本
          ~{"\n"}行照影本
          ~{"\n"}第二證件影本
          ~{"\n"}財力證明以實際需求為主
          </Label></Item>
          <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 10}}></Item>
        </Form>
        </Content>
        </Tab>
      </Tabs>
     </Container>

   );
    }
}
