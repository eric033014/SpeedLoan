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

export default class addreserve extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '預約貸款諮詢'
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
            <Form style={{paddingBottom: 30, paddingTop: 30}}>
            <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>申請貸款類別</Label>
            <Picker
            mode="dropdown"
            placeholder="申請貸款類別..."
            selectedValue={this.state.loan_category}
            onValueChange={this.onValueChange_loan_category.bind(this)}
            style={{ marginLeft: 15, marginRight: 15 }}
            >
            <Item label="請選擇您的申請貸款類別..." value="key0" />
            <Item label="財會人員	" value="key1" />
            <Item label="教職人員" value="key2" />
            <Item label="學生" value="key3" />
            <Item label="無業人員" value="key4" />
            <Item label="服務業" value="key5" />
          </Picker>
          <View
            style={{
              borderBottomColor: '#515151',
              borderBottomWidth: 1,
              marginLeft: 15,
              marginRight: 15
            }}
           />

              <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
                <Label>需貸款金額</Label>
                <Input
                  placeholder="請輸入您的貸款金額..."
                  onBlur={ () => { this.setState({
                    amount_border: '#515151'
                  })
                  }}
                  onFocus={ () => { this.setState({
                    amount_border: '#7ACECE'
                  })
                  }}
                  value={this.state.name}
                  style={{ borderBottomWidth: 1, borderBottomColor: this.state.amount_border }} />
              </Item>

              <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>區域</Label>
              <Picker
              mode="dropdown"
              placeholder="請選擇您的區域..."
              selectedValue={this.state.area}
              onValueChange={this.onValueChange_area.bind(this)}
              style={{ marginLeft: 15, marginRight: 15 }}
              >
              <Item label="請選擇您的區域..." value="key0" />
              <Item label="北部	" value="key1" />
              <Item label="中部" value="key2" />
              <Item label="南部" value="key3" />
              <Item label="東部" value="key4" />
            </Picker>
            <View
              style={{
                borderBottomColor: '#515151',
                borderBottomWidth: 1,
                marginLeft: 15,
                marginRight: 15
              }}
             />

             <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
               <Label>事務所名</Label>
               <Input
                 placeholder="請輸入您的事務所名..."
                 onBlur={ () => { this.setState({
                   name_border: '#515151'
                 })
                 }}
                 onFocus={ () => { this.setState({
                   name_border: '#7ACECE'
                 })
                 }}
                 style={{ borderBottomWidth: 1, borderBottomColor: this.state.name_border }} />
             </Item>

             <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
               <Label>貸款目的</Label>
               <Input
                 placeholder="請輸入您的貸款目的..."
                 onBlur={ () => { this.setState({
                   purpose_border: '#515151'
                 })
                 }}
                 onFocus={ () => { this.setState({
                   purpose_border: '#7ACECE'
                 })
                 }}
                 style={{ borderBottomWidth: 1, borderBottomColor: this.state.purpose_border }} />
             </Item>

             <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>還款年限</Label>
             <Picker
             mode="dropdown"
             placeholder="請選擇還款年限..."
             selectedValue={this.state.return_year}
             onValueChange={this.onValueChange_return_year.bind(this)}
             style={{ marginLeft: 15, marginRight: 15 }}
             >
             <Item label="請選擇還款年限..." value="key0" />
             <Item label="北部	" value="key1" />
             <Item label="中部" value="key2" />
             <Item label="南部" value="key3" />
             <Item label="東部" value="key4" />
           </Picker>
           <View
             style={{
               borderBottomColor: '#515151',
               borderBottomWidth: 1,
               marginLeft: 15,
               marginRight: 15
             }}
            />

            <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
              <Label>信用卡卡號</Label>
              <Input
                placeholder="請輸入您的信用卡卡號..."
                onBlur={ () => { this.setState({
                  card_border: '#515151'
                })
                }}
                onFocus={ () => { this.setState({
                  card_border: '#7ACECE'
                })
                }}
                style={{ borderBottomWidth: 1, borderBottomColor: this.state.card_border }} />
            </Item>
            <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>預約時間</Label>
            <DatePicker
                    style={{ width: '100%', marginLeft:15, marginRight:15,showIcon: false }}
                    date={this.state.date}
                    mode="datetime"
                    placeholder="請選擇預約時間"
                    format="YYYY-MM-DD HH:MM:SS"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="選擇"
                    cancelBtnText="取消"
                    showIcon='false'
                    customStyles={{
                      dateIcon: {
                        opacity: 0
                      },
                      dateInput: {
                        marginLeft: 0,
                        marginRight: -12,
                        borderWidth: 0
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
              />
              <View
                style={{
                  borderBottomColor: '#515151',
                  borderBottomWidth: 1,
                  marginLeft: 15,
                  marginRight: 15
                }}
               />

               <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>地點</Label>
               <Picker
               mode="dropdown"
               placeholder="請選擇區域..."
               selectedValue={this.state.return_year}
               onValueChange={this.onValueChange_return_year.bind(this)}
               style={{ marginLeft: 15, marginRight: 15}}
               >
               <Item label="請選擇區域..." value="key0" />
               <Item label="北部	" value="key1" />
               <Item label="中部" value="key2" />
               <Item label="南部" value="key3" />
               <Item label="東部" value="key4" />
               </Picker>

               <View
                 style={{
                   borderBottomColor: '#515151',
                   borderBottomWidth: 1,
                   marginLeft: 15,
                   marginRight: 15
                 }}
                />

               <Picker
               mode="dropdown"
               placeholder="請選擇事務所..."
               selectedValue={this.state.return_year}
               onValueChange={this.onValueChange_return_year.bind(this)}
               style={{ marginLeft: 15, marginRight: 15}}
               >
               <Item label="請選擇事務所..." value="key0" />
               <Item label="北部	" value="key1" />
               <Item label="中部" value="key2" />
               <Item label="南部" value="key3" />
               <Item label="東部" value="key4" />
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
