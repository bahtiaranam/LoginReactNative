import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('../github.png')}/>					
					<Text style={styles.title}>An app made for github using React Native</Text>
				</View>
				<View style ={styles.formContainer}>
					<LoginForm />  
			 	</View>
			</KeyboardAvoidingView>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex : 1,
		backgroundColor: '#2c3e50'
	},
	logoContainer:{
		alignItems :'center',
		flexGrow : 100,
		justifyContent:'center'
	},
	title:{
		color:'#fff',
		marginTop: 12,
		width:170,
		textAlign: 'center'
	},
	logo:{
		width: 130,
		height:130
	}
});
