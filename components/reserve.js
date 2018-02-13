import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Label, Segment, Fab
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
var detail=[];
var detail_finish=[];
export default class reserve extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '貸款諮詢',
        loading:false,
        userid :this.props.screenProps.auth().currentUser.uid,
      }
      console.log("con");
    }
    static navigationOptions = {
      header: null
    }
    // itemClick() {
    //   this.props.navigation.navigate('reserve_detail');
    // }
    componentDidMount() {
      var userid = this.state.userid;
      var parent = this;
      this.props.screenProps.database().ref('/reserve').once("value").then(function(snapshot) {
        detail=[];
        detail_finish=[];
        snapshot.forEach(function(temp){
          console.log(temp.val().name);

          if(temp.val().account_id == userid && temp.val().account_id != null && typeof temp.val().account_id != undefined){
            if(temp.val().finish == 0){
              console.log("key: "+temp.key);
              detail.push(
                <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 10, elevation: 0, borderWidth: 1, borderRadius: 0, borderColor: 'white' }}>
                  <CardItem button onPress={() =>
                    parent.props.navigation.navigate('reserve_detail',{key:temp.key,finish:temp.val().finish,job:temp.val().job,phone:temp.val().phone,back:'貸款諮詢',category:temp.val().category,name:temp.val().name,purpose:temp.val().purpose,date1:temp.val().date1,city1:temp.val().city1,area1:temp.val().area1,money:temp.val().need_money,year:temp.val().return_year,date2:temp.val().date2,city2:temp.val().city2,area2:temp.val().area2,date3:temp.val().date3,city3:temp.val().city3,area3:temp.val().area3})
                  } style={{ borderWidth: 0, borderRadius: 0 }} >
                    <Body>
                      <Text style={{ color: '#82CC7A' }} >{temp.val().category}</Text>
                      <Text style={{ color: '#3C3C3C' }} >{temp.val().name}</Text>
                    </Body>
                    <Right>
                    <Text style={{ color: '#7ACECE' }} >{temp.val().date1}</Text>
                    <Text>{temp.val().city1},{temp.val().area1}</Text>
                    </Right>
                   </CardItem>
                 </Card>
            );
          } else{
            console.log("key: "+temp.key);
            detail_finish.push(
              <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 10, elevation: 0, borderWidth: 1, borderRadius: 0, borderColor: 'white' }}>
                <CardItem button onPress={() =>
                  parent.props.navigation.navigate('reserve_detail',{key:temp.key,finish:temp.val().finish,job:temp.val().job,phone:temp.val().phone,back:'貸款諮詢',category:temp.val().category,name:temp.val().name,purpose:temp.val().purpose,date1:temp.val().date1,city1:temp.val().city1,area1:temp.val().area1,money:temp.val().need_money,year:temp.val().return_year,date2:temp.val().date2,city2:temp.val().city2,area2:temp.val().area2,date3:temp.val().date3,city3:temp.val().city3,area3:temp.val().area3})
                } style={{ borderWidth: 0, borderRadius: 0 }} >
                  <Body>
                    <Text style={{ color: '#82CC7A' }} >{temp.val().category}</Text>
                    <Text style={{ color: '#3C3C3C' }} >{temp.val().name}</Text>
                  </Body>
                  <Right>
                  <Text style={{ color: '#7ACECE' }} >{temp.val().date1}</Text>
                  <Text>{temp.val().city1},{temp.val().area1}</Text>
                  </Right>
                 </CardItem>
               </Card>
          );
          }
        }
          console.log("detail: "+detail[0]);

        }.bind(this));
        console.log("detail1: "+detail[0]);
      }).then(function(){
        this.setState({
          loading:true
        });
        console.log("detail2: "+detail[0]);
      }.bind(this));
    }
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  render() {
    const { title } = this.state;

    if(this.state.loading){
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
                backgroundColor: this.state.seg  ? "#3C3C3C" : undefined,
                borderColor: "#3C3C3C",
              }}
              first
              active={this.state.seg  ? true : false}
              onPress={() => this.setState({ seg:true })}
            >
              <Text style={{ color: this.state.seg ? "#FFF" : "#3C3C3C" }}>未分配</Text>
            </Button>
            <Button
              style={{
                backgroundColor: !this.state.seg  ? "#3C3C3C" : undefined,
                borderColor: "#3C3C3C",
              }}
              active={!this.state.seg  ? true : false}
              onPress={() => this.setState({ seg:false })}
            >
              <Text style={{ color: !this.state.seg  ? "#FFF" : "#3C3C3C" }}>已分配</Text>
            </Button>
        </Segment>
        <Content>

        { (this.state.seg) &&
          detail
        }
        { (!this.state.seg) &&
          detail_finish
        }
      </Content>
      <Fab
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#7ACECE' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('addreserve')}>
          <Icon name="add" />
        </Fab>
        </Container>

      );
    } else{
      return null;
    }
  }
}
