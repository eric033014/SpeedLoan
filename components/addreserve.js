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

var city_area = [{
  name: "台北市",
  area: ["內湖區","士林區","中山區","松山區"]
},{
  name: "新北市",
  area: ["土城區","板橋區","汐止區","淡水區"]
},{
  name: "桃園市",
  area: ["中區","南區","北區","西區","東區"]
}]

export default class addreserve extends Component {
  constructor(props) {
      super(props);
      var arr = [];
      for( var i = 0; i < city_area.length; i++){
        arr.push(city_area[i].name);
      }
      console.log(arr);
      this.state = {
        title: '預約貸款諮詢',
        city_options: arr,
        area_options: [],
        hascity: false,
        area_options2: [],
        hascity2: false,
        area_options3: [],
        hascity3: false
      }
    }
    onValueChange_loan_category(value: string) {
      this.setState({
        loan_category: value
      });
    }
    onValueChange_select_city(value: string) {
      var arr = [];
      var hascity=false;
      if(value!="none"){
        for( var i = 0; i < city_area.length; i++){
          if(city_area[i].name==value){
            arr=city_area[i].area;
          }
        }
        hascity=true;
      }else{
        hascity=false;
      }
      console.log(arr);

      this.setState({
        select_city: value,
        area_options: arr,
        hascity: hascity
      });
    }
    onValueChange_select_city2(value: string) {
      var arr = [];
      var hascity2=false;
      if(value!="none"){
        for( var i = 0; i < city_area.length; i++){
          if(city_area[i].name==value){
            arr=city_area[i].area;
          }
        }
        hascity2=true;
      }else{
        hascity2=false;
      }
      console.log(arr);

      this.setState({
        select_city2: value,
        area_options2: arr,
        hascity2: hascity2
      });
    }
    onValueChange_select_city3(value: string) {
      var arr = [];
      var hascity3=false;
      if(value!="none"){
        for( var i = 0; i < city_area.length; i++){
          if(city_area[i].name==value){
            arr=city_area[i].area;
          }
        }
        hascity3=true;
      }else{
        hascity3=false;
      }
      console.log(arr);

      this.setState({
        select_city3: value,
        area_options3: arr,
        hascity3: hascity3
      });
    }
    onValueChange_select_city_area(value: string) {
      this.setState({
        select_city_area: value
      });
    }
    onValueChange_select_city_area2(value: string) {
      this.setState({
        select_city_area2: value
      });
    }
    onValueChange_select_city_area3(value: string) {
      this.setState({
        select_city_area3: value
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


            <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>預約時間1</Label>
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

               <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>地點1</Label>
               <Picker
               mode="dropdown"
               placeholder="請選擇縣市..."
               selectedValue={this.state.select_city}
               onValueChange={this.onValueChange_select_city.bind(this)}
               style={{ marginLeft: 15, marginRight: 15}}
               >
               <Item label="請選擇縣市..." value="none" />
               {this.state.city_options.map((item, index) => {
                  return (<Item label={item} value={item} key={index}/>)
               })}
               </Picker>

               <View
                 style={{
                   borderBottomColor: '#515151',
                   borderBottomWidth: 1,
                   marginLeft: 15,
                   marginRight: 15
                 }}
                />

                { this.state.hascity &&
                  <Picker
                  mode="dropdown"
                  placeholder="請選擇鄉鎮市區..."
                  selectedValue={this.state.select_city_area}
                  onValueChange={this.onValueChange_select_city_area.bind(this)}
                  style={{ marginLeft: 15, marginRight: 15}}
                  >
                  <Item label="請選擇鄉鎮市區..." value="none" />
                  {this.state.area_options.map((item, index) => {
                     return (<Item label={item} value={item} key={index}/>)
                  })}
                  </Picker>
                }
                { this.state.hascity &&
                  <View
                    style={{
                      borderBottomColor: '#515151',
                      borderBottomWidth: 1,
                      marginLeft: 15,
                      marginRight: 15
                    }}
                   />
                }

                <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>預約時間2</Label>
                <DatePicker
                        style={{ width: '100%', marginLeft:15, marginRight:15,showIcon: false }}
                        date={this.state.date2}
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
                        onDateChange={(date) => {this.setState({date2: date})}}
                  />
                  <View
                    style={{
                      borderBottomColor: '#515151',
                      borderBottomWidth: 1,
                      marginLeft: 15,
                      marginRight: 15
                    }}
                   />

                   <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>地點2</Label>
                   <Picker
                   mode="dropdown"
                   placeholder="請選擇縣市..."
                   selectedValue={this.state.select_city2}
                   onValueChange={this.onValueChange_select_city2.bind(this)}
                   style={{ marginLeft: 15, marginRight: 15}}
                   >
                   <Item label="請選擇縣市..." value="none" />
                   {this.state.city_options.map((item, index) => {
                      return (<Item label={item} value={item} key={index}/>)
                   })}
                   </Picker>

                   <View
                     style={{
                       borderBottomColor: '#515151',
                       borderBottomWidth: 1,
                       marginLeft: 15,
                       marginRight: 15
                     }}
                    />

                    { this.state.hascity2 &&
                      <Picker
                      mode="dropdown"
                      placeholder="請選擇鄉鎮市區..."
                      selectedValue={this.state.select_city_area2}
                      onValueChange={this.onValueChange_select_city_area2.bind(this)}
                      style={{ marginLeft: 15, marginRight: 15}}
                      >
                      <Item label="請選擇鄉鎮市區..." value="none" />
                      {this.state.area_options2.map((item, index) => {
                         return (<Item label={item} value={item} key={index}/>)
                      })}
                      </Picker>
                    }
                    { this.state.hascity2 &&
                      <View
                        style={{
                          borderBottomColor: '#515151',
                          borderBottomWidth: 1,
                          marginLeft: 15,
                          marginRight: 15
                        }}
                       />
                    }

                    <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>預約時間3</Label>
                    <DatePicker
                            style={{ width: '100%', marginLeft:15, marginRight:15,showIcon: false }}
                            date={this.state.date3}
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
                            onDateChange={(date) => {this.setState({date3: date})}}
                      />
                      <View
                        style={{
                          borderBottomColor: '#515151',
                          borderBottomWidth: 1,
                          marginLeft: 15,
                          marginRight: 15
                        }}
                       />

                       <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>地點3</Label>
                       <Picker
                       mode="dropdown"
                       placeholder="請選擇縣市..."
                       selectedValue={this.state.select_city3}
                       onValueChange={this.onValueChange_select_city3.bind(this)}
                       style={{ marginLeft: 15, marginRight: 15}}
                       >
                       <Item label="請選擇縣市..." value="none" />
                       {this.state.city_options.map((item, index) => {
                          return (<Item label={item} value={item} key={index}/>)
                       })}
                       </Picker>

                       <View
                         style={{
                           borderBottomColor: '#515151',
                           borderBottomWidth: 1,
                           marginLeft: 15,
                           marginRight: 15
                         }}
                        />

                        { this.state.hascity3 &&
                          <Picker
                          mode="dropdown"
                          placeholder="請選擇鄉鎮市區..."
                          selectedValue={this.state.select_city_area3}
                          onValueChange={this.onValueChange_select_city_area3.bind(this)}
                          style={{ marginLeft: 15, marginRight: 15}}
                          >
                          <Item label="請選擇鄉鎮市區..." value="none" />
                          {this.state.area_options3.map((item, index) => {
                             return (<Item label={item} value={item} key={index}/>)
                          })}
                          </Picker>
                        }
                        { this.state.hascity3 &&
                          <View
                            style={{
                              borderBottomColor: '#515151',
                              borderBottomWidth: 1,
                              marginLeft: 15,
                              marginRight: 15
                            }}
                           />
                        }






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
