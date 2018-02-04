import React, { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
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
  static navigationOptions = {
    tabBarLabel:'利率試算',
  }
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
    render() {
      return (
     	  <View style={styles.container}>
   	       <Text style={styles.description}>
           Interest rate trial page
   	       </Text>
       </View>
      );
    }
}
