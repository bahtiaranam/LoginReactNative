import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class LoginForm extends Component{
	render(){
		return(
			<View style ={styles.container}>
				<TextInput 
					style={styles.input}
					/>
				<TextInput 
					style={styles.input}
					/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		padding : 20
	},
	input: { 
		height : 40,
		backgroundColor: 'rgba(255,255,255,0.7)',
		marginBottom:20,
		color:'#fff',
		paddingHorizontal:10
	}
});