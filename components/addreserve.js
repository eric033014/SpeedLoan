import React, { Component }  from 'react';
import reserve from './reserve.js'
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
  area: ["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"]
},{
  name: "新北市",
  area: ["板橋區", "三重區", "中和區","新莊區","永和區","新店區","土城區","蘆洲區","樹林區","汐止區","三峽區","淡水區","鶯歌區","五股區","泰山區","林口區","瑞芳區","深坑區","石碇區","坪林區","三芝區","石門區","八里區","平溪區","雙溪區","貢寮區","金山區","萬里區","烏來區"]
},{
  name: "桃園市",
  area: ["桃園區","中壢區","平鎮區","八德區","楊梅區","蘆竹區","龜山區","龍潭區","大溪區","大園區","觀音區","新屋區","復興區"]
},{
  name: "台中市",
  area: ["中區","東區","南區","西區","北區","北屯區","西屯區","南屯區","太平區","大里區","霧峰區","烏日區","豐原區","后里區","石岡區","東勢區","和平區","新社區","潭子區","大雅區","神岡區","大肚區","沙鹿區","龍井區","梧棲區","清水區","大甲區","外埔區","大安區"]
},{
  name: "台南市",
  area: ["中西區","東區","南區","北區","安平區","安南區","永康區","歸仁區","新化區","左鎮區","玉井區","楠西區","南化區","仁德區","關廟區","龍崎區","官田區","麻豆區","佳里區","西港區","七股區","將軍區","學甲區","北門區","新營區","後壁區","白河區","東山區","六甲區","下營區","柳營區","鹽水區","善化區","新市區","大內區","山上區","新市區","安定區"]
},{
  name: "高雄市",
  area: ["楠梓區","左營區","鼓山區","三民區","鹽埕區","前金區","新興區","苓雅區","前鎮區","旗津區","小港區","鳳山地區","鳳山區","大寮區","鳥松區","林園區","仁武區","大樹區","大社區","岡山區","路竹區","橋頭區","梓官區","彌陀區","永安區","燕巢區","田寮區","阿蓮區","茄萣區","湖內區","旗山區","美濃區","內門區","杉林區","甲仙區","六龜區","茂林區","桃源區","那瑪夏區"]
},{
  name: "新竹縣",
  area: ["竹北市","竹東鎮","新埔鎮","關西鎮","新豐鄉","峨眉鄉","寶山鄉","五峰鄉","橫山鄉","北埔鄉","尖石鄉","芎林鄉","湖口鄉"]
},{
  name: "苗栗縣",
  area: ["苗栗市","頭份市","竹南鎮","後龍鎮","通霄鎮","苑裡鎮","卓蘭鎮","造橋鄉","西湖鄉","頭屋鄉","公館鄉","銅鑼鄉","三義鄉","大湖鄉","獅潭鄉","三灣鄉","南庄鄉","泰安鄉"]
},{
  name: "彰化縣",
  area: ["和美鎮", "北斗鎮", "員林市", "二水鄉", "埔心鄉", "溪湖鎮", "線西鄉", "芬園鄉", "伸港鄉", "花壇鄉", "大村鄉", "永靖鄉", "溪州鄉", "竹塘鄉", "芳苑鄉", "田中鎮", "二林鎮", "埤頭鄉", "大城鄉", "田尾鄉", "社頭鄉", "秀水鄉", "埔鹽鄉", "鹿港鎮", "彰化市", "福興鄉"]
},{
  name: "南投縣",
  area: ["中寮鄉","仁愛鄉","水里鄉","名間鄉","竹山鎮","信義鄉","南投市","埔里鎮","草屯鎮","國姓鄉","魚池鄉","鹿谷鄉","集集鎮"]
},{
  name: "雲林縣",
  area: ["斗六市","斗南鎮","虎尾鎮","西螺鎮","土庫鎮","北港鎮","古坑鄉","大埤鄉","莿桐鄉","林內鄉","二崙鄉","崙背鄉","麥寮鄉","東勢鄉","褒忠鄉","臺西鄉","元長鄉","四湖鄉","口湖鄉","水林鄉"]
},{
  name: "嘉義縣",
  area: ["民雄鄉","水上鄉","中埔鄉","朴子市","太保市","竹崎鄉","新港鄉","大林鎮","布袋鎮","東石鄉","六腳鄉","梅山鄉","義竹鄉","鹿草鄉","溪口鄉","番路鄉","阿里山鄉","大埔鄉"]
},{
  name: "屏東縣",
  area: ["屏東市","潮州鎮","東港鎮","恆春鎮","萬丹鄉","長治鄉","麟洛鄉","九如鄉","里港鄉","鹽埔鄉","高樹鄉","萬巒鄉","內埔鄉","竹田鄉","新埤鄉","枋寮鄉","新園鄉","崁頂鄉","林邊鄉","南州鄉","佳冬鄉","琉球鄉","車城鄉","滿州鄉","枋山鄉","三地門鄉","霧臺鄉","瑪家鄉","泰武鄉","來義鄉","春日鄉","獅子鄉","牡丹鄉"]
},{
  name: "花蓮縣",
  area: ["花蓮市","鳳林鎮","玉里鎮","新城鄉","吉安鄉","壽豐鄉","光復鄉","豐濱鄉","瑞穗鄉","富里鄉","秀林鄉","萬榮鄉","卓溪鄉"]
},{
  name: "宜蘭縣",
  area: ["宜蘭市","羅東鎮","蘇澳鎮","頭城鎮","礁溪鄉","員山鄉","壯圍鄉","五結鄉","冬山鄉","三星鄉","大同鄉","南澳鄉"]
},{
  name: "台東縣",
  area: ["臺東市","卑南鄉","成功鎮","太麻里鄉","關山鎮","東河鄉","池上鄉","鹿野鄉","長濱鄉","大武鄉","蘭嶼鄉","海端鄉","綠島鄉","金峰鄉","達仁鄉","延平鄉"]
},{
  name: "澎湖縣",
  area: ["馬公市","湖西鄉","白沙鄉","西嶼鄉","望安鄉","七美鄉"]
},{
  name: "基隆市",
  area: ["仁愛區","中正區","信義區","中山區","安樂區","七堵區","暖暖區"]
},{
  name: "新竹市",
  area: ["東區","北區","香山區"]
},{
  name: "嘉義市",
  area: ["東區","西區"]
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
        hascity3: false,
        userid:this.props.screenProps.auth().currentUser.uid,
        loan_category: "小額信貸",
        need_money: 1000,
        purpose: "Your purpose",
        return_year: "1年內",
        date:"",
        date2:"",
        date3:"",
        select_city:"key1",
        select_city2:"key2",
        select_city3:"key2",
        select_city_area:"key1",
        select_city_area2:"key1",
        select_city_area3:"key1",
      }
    }
    async componentWillMount() {
        this.props.screenProps.database().ref('/profile/'+this.state.userid).once("value").then(function(snapshot) {
          console.log(snapshot.val().name);
          this.setState({
            name:snapshot.val().name,
            phone:snapshot.val().phone,
            email:snapshot.val().email,
            job_select: snapshot.val().job,
            income_select: snapshot.val().income,
            worked_select: snapshot.val().year,
            region_select: snapshot.val().location,
          });
        }.bind(this));
    }
    onPressAdd = () => {
        console.log(this.props.screenProps);
        this.props.screenProps.database().ref('reserve').push({
            account_id: this.state.userid,
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email,
            income: this.state.income_select,
            job: this.state.job_select,
            year: this.state.worked_select,
            category: this.state.loan_category,
            need_money: this.state.need_money,
            purpose: this.state.purpose,
            return_year: this.state.return_year,
            date1: this.state.date,
            date2: this.state.date2,
            date3: this.state.date3,
            city1: this.state.select_city,
            city2: this.state.select_city2,
            city3: this.state.select_city3,
            area1: this.state.select_city_area,
            area2: this.state.select_city_area2,
            area3: this.state.select_city_area3,
            finish:false,
        });
        Toast.show('預約成功', Toast.SHORT);
        this.props.navigation.navigate('貸款諮詢');
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

   static navigationOptions = {
      drawerLabel: () => null
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
              <Icon type="Ionicons" name='md-arrow-back' style={{color:"#7ACECE"}}  onPress={()=>
              this.props.navigation.navigate('貸款諮詢')}/>
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
            <Item label="小額信貸" value="小額信貸" />
            <Item label="土地貸款" value="土地貸款" />
            <Item label="房屋二胎貸款" value="房屋二胎貸款" />
            <Item label="汽車貸款" value="汽車貸款" />
            <Item label="工商融資" value="工商融資" />
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
                  onChangeText={
                      (text) => {
                          this.setState({
                              need_money: text
                          });
                      }
                  }
                  value={this.state.need_money}
                  style={{ borderBottomWidth: 1, borderBottomColor: this.state.amount_border }} />
              </Item>





             <Item stackedLabel style={{borderColor: 'transparent', marginRight: 15}}>
               <Label>貸款目的</Label>
               <Input
                 placeholder="請輸入您的貸款目的..."
                 value={this.state.purpose}
                 onBlur={ () => { this.setState({
                   purpose_border: '#515151'
                 })
                 }}
                 onFocus={ () => { this.setState({
                   purpose_border: '#7ACECE'
                 })
                 }}
                 onChangeText={
                     (text) => {
                         this.setState({
                             purpose: text
                         });
                     }
                 }
                 style={{ borderBottomWidth: 1, borderBottomColor: this.state.purpose_border }} />
             </Item>

             <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15 }}>還款年限</Label>
             <Picker
             mode="dropdown"
             placeholder="請選擇希望還款年限..."
             selectedValue={this.state.return_year}
             onValueChange={this.onValueChange_return_year.bind(this)}
             style={{ marginLeft: 15, marginRight: 15 }}
             >
             <Item label="1年內" value="1年內" />
             <Item label="2~5年內" value="2~5年內" />
             <Item label="5~10年內" value="5~10年內" />
             <Item label="10年以上" value="10年以上" />
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
                    format="YYYY-MM-DD HH:mm"
                    minDate="2018-01-01"
                    maxDate="2020-12-31"
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
                        format="YYYY-MM-DD HH:mm"
                        minDate="2018-01-01"
                        maxDate="2020-12-31"
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
                            format="YYYY-MM-DD HH:mm"
                            minDate="2018-01-01"
                            maxDate="2020-12-31"
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
              <Text style={{color: "white"}} >預約</Text>
            </Button>
          </Content>
        </Container>

      );
    }
}
