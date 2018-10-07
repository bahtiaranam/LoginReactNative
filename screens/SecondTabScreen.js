import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from '../components/judul';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Judul judul ="BIODATA"/>
        <Image source={require('../image.jpg')} style={styles.image}/>
        <Text style={styles.welcome}>Nama : Muhamad Bahtiar Anam</Text>
        <Text style={styles.welcome}>Kelas  : XI RPL 1</Text>
        <Text style={styles.welcome}>No       : 21</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    color: '#F5FCFF',
    margin: 8,
  },
  image:{
  width:150 , 
  height:200, 
  alignSelf:'center',
  marginBottom: 30
  }
});
