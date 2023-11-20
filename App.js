import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AppNavigation from './AppNavigation';

export default function App()
{
	return (
		<View style={ styles.container }>
			<Text>My food delivery app!</Text>
			<StatusBar style="auto" />
			<AppNavigation style={ styles.AppNavigation } />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		width: "100vw",
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	AppNavigation: {
		flex: 1,
		flexGrow: 1,
		// width: "100vw",
	}
});
