import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';


class Judul extends Component {
	render(){
		return(
			<View>
			<Text style={salon.Judul}>{this.props.judul}</Text>
			</View>
		)
	}

}
const salon = {
	Judul: {
		color : '#F5FCFF',
		fontSize: 45,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom:20
		

	}
}
export default Judul;