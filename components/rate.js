import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Input
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



export default class reserve extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '利率試算',
        amount: 0,
        rate: 0,
        year: 0
      }
    }
    static navigationOptions = {
      drawerIcon: ({ tintColor }) => (
        <Icon name='calculator' style={{ fontSize: 20 , color: tintColor }}  />
      )
    }

    //貸款試算(以本息平均攤還法)
    //(欄位：總貸款金額,年限,年利率%數）

    onPressAdd = () => {
        //(1＋月利率)^月數
        let m = this.state.year*12;
        console.log(m);
        let m_rate = this.state.rate/1200;
        console.log(m_rate);
        let temp = Math.pow((1+m_rate),m);
        console.log(temp);
        let temp1 = temp*m_rate;
        let temp2 = temp-1;
        let temp3 = temp1/temp2;
        console.log(temp3);

        //每月應繳金額
        console.log(temp3*this.state.amount);
        //應繳總金額
        console.log(temp3*this.state.amount*m);
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
             <Input
               placeholder="請輸入您的貸款金額..."
               keyboardType = 'numeric'
               onBlur={ () => { this.setState({
                 name_border: '#515151'
               })
               }}
               onFocus={ () => { this.setState({
                 name_border: '#7ACECE'
               })
               }}
               value={this.state.amount}
               onChangeText={amount => this.setState({ amount })}

               style={{ borderBottomWidth: 1, borderBottomColor: this.state.name_border }} />
               <Input
                 placeholder="請輸入您的貸款年限..."
                 keyboardType = 'numeric'
                 onBlur={ () => { this.setState({
                   name_border: '#515151'
                 })
                 }}
                 onFocus={ () => { this.setState({
                   name_border: '#7ACECE'
                 })
                 }}
                 value={this.state.year}
                 onChangeText={year => this.setState({ year })}

                 style={{ borderBottomWidth: 1, borderBottomColor: this.state.name_border }} />
               <Input
                 placeholder="請輸入您的貸款利率..."
                 keyboardType = 'numeric'
                 onBlur={ () => { this.setState({
                   name_border: '#515151'
                 })
                 }}
                 onFocus={ () => { this.setState({
                   name_border: '#7ACECE'
                 })
                 }}
                 value={this.state.rate}
                 onChangeText={rate => this.setState({ rate })}

                 style={{ borderBottomWidth: 1, borderBottomColor: this.state.name_border }} />

                 <Button block style={{ backgroundColor: "#7ACECE",height: 45, marginLeft: 15, marginRight: 15, marginBottom: 30, elevation: 0 }}
                onPress={this.onPressAdd}
                 >
                   <Text style={{color: "white"}} >確定</Text>
                 </Button>

        </Container>

      );
    }
}
