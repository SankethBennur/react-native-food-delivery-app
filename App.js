import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RestaurantList from './src/components/Home/RestaurantList';

export default function App()
{
	return (
		<View style={ styles.container }>
			<Text>My food delivery app!</Text>
			<RestaurantList />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
