import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Label, Segment
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
        title: '貸款需求區',
        seg: 1
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
        <Segment style={{ marginTop: 15, backgroundColor: "transparent"  }}>
            <Button
              style={{
                backgroundColor: this.state.seg === 1 ? "#3C3C3C" : undefined,
                borderColor: "#3C3C3C",
              }}
              first
              active={this.state.seg === 1 ? true : false}
              onPress={() => this.setState({ seg: 1 })}
            >
              <Text style={{ color: this.state.seg === 1 ? "#FFF" : "#3C3C3C" }}>未分配</Text>
            </Button>
            <Button
              style={{
                backgroundColor: this.state.seg === 2 ? "#3C3C3C" : undefined,
                borderColor: "#3C3C3C",
              }}
              active={this.state.seg === 2 ? true : false}
              onPress={() => this.setState({ seg: 2 })}
            >
              <Text style={{ color: this.state.seg === 2 ? "#FFF" : "#3C3C3C" }}>已分配</Text>
            </Button>
            <Button
              last
              style={{
                backgroundColor: this.state.seg === 3 ? "#3C3C3C" : undefined,
                borderColor: "#3C3C3C",
              }}
              active={this.state.seg === 3 ? true : false}
              onPress={() => this.setState({ seg: 3 })}
            >
              <Text style={{ color: this.state.seg === 3 ? "#FFF" : "#3C3C3C" }}>歷史紀錄</Text>
            </Button>
        </Segment>
        <Content>
        <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 10, elevation: 0, borderWidth: 1, borderRadius: 0, borderColor: 'white' }}>
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
        </Container>

      );
    }
}
