import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Input, Label, Picker, InputGroup
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
        year: 0,
        monthly: 0,
        yearly: 0,
        calc: false,
        rate_border: '#515151'
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
        this.setState({
          calc: false
        });
        let m = this.state.year*12;
        console.log(m);
        let m_rate = this.state.rate/1200;
        console.log(m_rate);
        let temp = Math.pow((1+m_rate),m);
        console.log(temp);
        let temp1 = temp*m_rate;
        let temp2 = temp-1;
        let temp3 = temp1/temp2;
        let monthly = Number.parseInt(temp3*this.state.amount,10)+1;
        let yearly = monthly*m;
        console.log(temp3);

        //每月應繳金額
        this.setState({
          monthly: monthly
        });
        console.log(monthly);
        //應繳總金額
        this.setState({
          yearly: yearly
        });
        console.log(yearly);
        this.setState({
          calc: true
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
          <Form style={{paddingBottom: 30, marginTop: 30}}>
          <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
            <Label>貸款金額</Label>
            <Input
              placeholder="請輸入您的貸款金額..."
              keyboardType = 'numeric'
              onBlur={ () => { this.setState({
                amount_border: '#515151'
              })
              }}
              onFocus={ () => { this.setState({
                amount_border: '#7ACECE'
              })
              }}
              value={this.state.amount}
              onChangeText={amount => this.setState({ amount })}
              style={{ borderBottomWidth: 1, borderBottomColor: this.state.amount_border }} />
          </Item>
          <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
            <Label>貸款年限</Label>
            <Input
              placeholder="請輸入您的貸款年限..."
              keyboardType = 'numeric'
              onBlur={ () => { this.setState({
                year_border: '#515151'
              })
              }}
              onFocus={ () => { this.setState({
                year_border: '#7ACECE'
              })
              }}
              value={this.state.year}
              onChangeText={year => this.setState({ year })}
              style={{ borderBottomWidth: 1, borderBottomColor: this.state.year_border }} />
          </Item>
          <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
              <Label>貸款利率</Label>
              <InputGroup iconRight style={{ paddingLeft: 0, borderBottomWidth: 1, borderBottomColor: this.state.rate_border  }} >
            <Input
              placeholder="請輸入您的貸款利率(%)..."
              keyboardType = 'numeric'
              onBlur={ () => { this.setState({
                rate_border: '#515151'
              })
              }}
              onFocus={ () => { this.setState({
                rate_border: '#7ACECE'
              })
              }}
              value={this.state.rate}
              onChangeText={rate => this.setState({ rate })}
               />
              <Icon type="FontAwesome" name='percent' style={{ fontSize:15, color: this.state.rate_border }} />

          </InputGroup>

          </Item>
          { this.state.calc &&
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 15}}>
            <Label>每月應繳金額</Label>
            <Right>
            <Label style={{fontSize: 30}}><Label style={{fontSize: 10}} >NTD</Label> {this.state.monthly}</Label>
            </Right>
            </Item>
          }
          { this.state.calc &&
            <Item style={{borderColor: 'transparent', marginRight: 15, marginTop: 15}}>
            <Label>每年應繳金額</Label>
            <Right>
            <Label style={{fontSize: 30}}><Label style={{fontSize: 10}} >NTD</Label> {this.state.yearly}</Label>
            </Right>
            </Item>
          }
          </Form>
        </Content>

                 <Button block style={{ backgroundColor: "#7ACECE",height: 45, marginLeft: 15, marginRight: 15, marginBottom: 30, elevation: 0 }}
                onPress={this.onPressAdd}
                 >
                   <Text style={{color: "white"}} >開始計算</Text>
                 </Button>

        </Container>

      );
    }
}
