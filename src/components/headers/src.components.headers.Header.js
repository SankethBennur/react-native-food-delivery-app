import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Header = ({ heading = "", back_button = false }) =>
{
	return (
		<View>
			<Text style={ styles.heading }>
				{ heading }
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 25,
	}
});

export default Header;
