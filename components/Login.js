import React, {Component} from 'react';
import {StyleSheet, View, Text } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.title}>AYO LOGIN FACEBOOK</Text>
				</View>
				<View style ={styles.formContainer}>
					<LoginForm />  
			 	</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex : 1,
		backgroundColor: '#3498db'
	},
	logoContainer:{
		alignItems :'center',
		flexGrow : 1,
		justifyContent:'center',
	},
	title:{
		color:'#fff'
	}
});
