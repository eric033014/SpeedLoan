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

export default class company_reserve extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '貸款需求區'
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
        <Container style={{ backgroundColor: '#EFEFEF' }} >
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
        <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 15, elevation: 0, borderWidth: 1, borderRadius: 0, borderColor: 'white' }}>
          <CardItem style={{ borderWidth: 0, borderRadius: 0 }} >
            <Body>
              <Text style={{ color: '#82CC7A' }} >類別</Text>
              <Text style={{ color: '#3C3C3C' }} >事務所</Text>
            </Body>
            <Right>
            <Text style={{ color: '#7ACECE' }} >今日18:30</Text>
            <Text>台北市,文山區</Text>
            </Right>
           </CardItem>
         </Card>
         <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 15, elevation: 0, borderWidth: 1, borderRadius: 0, borderColor: 'white' }}>
           <CardItem style={{ borderWidth: 0, borderRadius: 0 }} >
             <Body>
               <Text style={{ color: '#82CC7A' }} >類別</Text>
               <Text style={{ color: '#3C3C3C' }} >事務所</Text>
             </Body>
             <Right>
             <Text style={{ color: '#7ACECE' }} >今日18:30</Text>
             <Text>台北市,文山區</Text>
             </Right>
            </CardItem>
          </Card>

      </Content>
        <View style={{ backgroundColor: 'white' }} >
        <Button block style={{ backgroundColor: "#7ACECE",height: 45, marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 20, elevation: 0 }}
       onPress={this.onPressAdd}
        >
          <Text style={{color: "white"}} >預約貸款諮詢</Text>
        </Button>
        </View>
        </Container>

      );
    }
}
