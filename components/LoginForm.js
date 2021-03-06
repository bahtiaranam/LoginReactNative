import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar} from 'react-native';

export default class LoginForm extends Component{
	render(){
		return(
			<View style ={styles.container}>
				<StatusBar
					barStyle="light-content"
					/>
				<TextInput 
					placeholder="username or email"
					placeholderTextColor="#2c3e50"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					style={styles.input}
					/>
				<TextInput 
					placeholder="password"
					style={styles.input}
					placeholderTextColor="#2c3e50"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					ref={(input) => this.passwordInput = input}
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
		marginBottom: 10,
		color:'#fff',
		paddingHorizontal:10
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
