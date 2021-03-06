import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Login from '../components/Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default App = (props) => (
  <View style={styles.container}>
      <Login/>
      <View style ={styles.formContainer}>
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={()=> props.navigator.switchToTab({
            tabIndex:1
          })}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
      </View>
)
      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    buttonContainer:{
    backgroundColor:'#34495e',
    paddingVertical: 15
  },
  buttonText:{
    textAlign:'center',
    color: '#ffffff',
    fontWeight: '700'
  }
});